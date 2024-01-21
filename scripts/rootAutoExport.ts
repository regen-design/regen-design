import * as path from 'path'
import * as fs from 'fs'
import * as prettier from 'prettier'
const prettierConfigString = fs.readFileSync(path.join(__dirname, '../.prettierrc'), 'utf-8')
const prettierConfig = JSON.parse(prettierConfigString || '{}')
const whiteFolders = ['icons']
const isNotPackageFolder = (folder: string) => /^\.(.*)$/.test(folder)
const isNotFolder = (folder: string) => /.*\..*/.test(folder)
function rootFolderAddExport() {
  const rootFolder = path.resolve(__dirname, `../packages/`)
  // 读取文件夹下的所有文件夹
  const packageFolders = fs.readdirSync(rootFolder)
  packageFolders.map(folder => {
    if (isNotPackageFolder(folder)) return
    if (isNotFolder(folder)) return
    if (whiteFolders.includes(folder)) return
    const folderPath = path.resolve(rootFolder, folder)
    const folders = fs.readdirSync(folderPath)
    let folderExportContent = ''
    folders.map(folder => {
      if (isNotPackageFolder(folder)) return
      if (isNotFolder(folder)) return
      folderExportContent += `export * from './${folder}'\n`
    })
    const exportFile = path.resolve(folderPath, folder === 'types' ? 'index.d.ts' : 'index.ts')
    if (folder === 'theme') {
      folderExportContent =
        `
      import { ThemeConfig } from '@regen-design/types'
      import { useTheme as useThemeFn } from 'styled-components'
      export const useTheme = useThemeFn as () => ThemeConfig
      ` + folderExportContent
    }
    if (!folderExportContent) return
    prettier.format(folderExportContent, prettierConfig).then(content => {
      fs.writeFile(exportFile, content, err => {
        if (err) throw err
        console.log(`${folder} index.ts file generated`)
      })
    })
  })
}

rootFolderAddExport()
