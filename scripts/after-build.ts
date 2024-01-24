import * as fs from 'fs'
import * as path from 'path'

const generateDeclarationFile = () => {
  const targetPath = path.join(__dirname, '../packages')
  const packages = fs.readdirSync(targetPath)
  let res = ''
  for (const p of packages) {
    const folder = path.join(targetPath, p)
    if (fs.statSync(folder).isDirectory()) {
      res += `export * from "./es/packages/${p}" \n`
    }
  }
  fs.writeFileSync(path.resolve('../dist/', 'index.d.ts'), res)
}

const removeFolders = (names: string[]) => {
  const targetPath = path.join(__dirname, '../dist')
  const packages = fs.readdirSync(targetPath)
  for (const p of packages) {
    const folder = path.join(targetPath, p)
    if (fs.statSync(folder).isDirectory()) {
      fs.readdirSync(folder).forEach(f => {
        const p = path.join(folder, f)
        if (names.includes(f) && fs.statSync(p).isDirectory()) {
          fs.rmdirSync(path.join(folder, f), { recursive: true })
        }
      })
    }
  }
}

// generateDeclarationFile()
removeFolders(['node_modules', '_virtual'])
