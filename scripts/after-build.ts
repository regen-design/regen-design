import * as fs from 'fs-extra'
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
  console.log('\x1B[32m%s\x1B[39m', '✅: Declaration file generated successfully')
}

generateDeclarationFile()
