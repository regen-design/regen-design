import * as readline from 'readline'
import * as fs from 'fs'
import * as path from 'path'
import * as prettier from 'prettier'
import { convertToUpperCase } from '@regen-design/utils'
import { exec } from 'child_process'

const prettierConfigString = fs.readFileSync(path.join(__dirname, '../.prettierrc'), 'utf-8')
const prettierConfig = JSON.parse(prettierConfigString || '{}')
function createComponentTemplate(componentName: string) {
  const ComponentName = convertToUpperCase(componentName)
  const render = `
    import { FC } from 'react'
    import { ${ComponentName}Props } from '@regen-design/types'
    import { Styled${ComponentName}, Styled${ComponentName}PrefixClass as prefixClass } from '@regen-design/theme'
    import classNames from 'classnames'
    export const ${ComponentName}: FC<${ComponentName}Props> = ({style={},className=""}) => {
      const ${componentName}Class = classNames(prefixClass, className)
      return <Styled${ComponentName} role="${componentName}" className={${componentName}Class} style={style}></Styled${ComponentName}>
    }
  `
  return prettier.format(render, prettierConfig)
}
function createThemeTemplate(componentName: string) {
  const ComponentName = convertToUpperCase(componentName)
  return prettier.format(
    `
  import { NAME_SPACE } from '@regen-design/constant'
  import { ${ComponentName}Props } from '@regen-design/types'
  import styled from 'styled-components'
  const prefix = \`\${NAME_SPACE}-${componentName}\`
  export const Styled${ComponentName}PrefixClass = prefix
  export const Styled${ComponentName} = styled.div<${ComponentName}Props>\`\`
  `,
    prettierConfig
  )
}
function createTypesTemplate(componentName: string) {
  return prettier.format(
    `
    import { CommonType } from '../common'
    export interface ${convertToUpperCase(componentName)}Props extends CommonType {}`,
    prettierConfig
  )
}
function createFileTask(folderName: string) {
  return (folderTypeName: string, fileName: string, content: string = ''): Promise<void> => {
    const folderPath = path.resolve(__dirname, `../packages/${folderTypeName}/` + folderName)
    return new Promise(resolve => {
      const createFile = () => {
        const indexFile = path.resolve(folderPath, fileName)
        fs.writeFile(indexFile, content, err => {
          if (err) throw err
          console.log(`${folderName}/${fileName} file created`)
          resolve()
        })
      }
      if (fs.existsSync(folderPath)) {
        createFile()
      } else {
        fs.mkdir(folderPath, err => {
          if (err) throw err
          console.log(`${folderName} folder created`)
          createFile()
        })
      }
    })
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Please enter a folder name: ', folderName => {
  if (!folderName) {
    rl.close()
    console.log('Folder name is required')
    process.exit(0)
  }
  if (!/^[a-zA-Z]+$/.test(folderName)) {
    rl.close()
    console.log('Folder name must be in camel case')
    process.exit(0)
  }
  const createFilesTasks = []
  const createTemplateTasks = [
    createComponentTemplate(folderName),
    createTypesTemplate(folderName),
    createThemeTemplate(folderName),
  ]
  const fileTask = createFileTask(folderName)
  Promise.all(createTemplateTasks)
    .then(([componentContent, typesContent, themeContent]) => {
      createFilesTasks.push(fileTask('components', `index.tsx`, componentContent))
      createFilesTasks.push(fileTask('types', `index.d.ts`, typesContent))
      createFilesTasks.push(fileTask('theme', `index.tsx`, themeContent))
      Promise.all(createFilesTasks)
        .then(() => {
          rl.close()
          console.log('All files created')
        })
        .catch(err => {
          rl.close()
          console.log(err)
        })
    })
    .catch(err => {
      rl.close()
      console.log(err)
    })
})

rl.on('close', () => {
  console.log('close event emitted')

  // exec auto export
  exec('npm run auto:export', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec script error: ${error}`)
      return
    }
    console.log(`auto export success: ${stdout}`)
    process.exit(0)
  })
})
