/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
import { convertToUpperCase } from '@regen-design/utils'

const readSvgFiles = () => {
  const svgFolder = path.join(__dirname, './src/svg') // SVG 文件所在的文件夹
  const svgFiles = fs.readdirSync(svgFolder) // 读取文件夹中的文件列表
  return svgFiles.map(file => {
    const svgPath = path.join(svgFolder, file) // 获取 SVG 文件的完整路径
    const svgContent = fs.readFileSync(svgPath, 'utf-8') // 读取 SVG 文件的内容
    const componentName = path.basename(file, '.svg') // 获取 SVG 文件名，作为组件名
    return { filename: file, content: svgContent, componentName: convertToUpperCase(componentName) }
  })
}
console.log(readSvgFiles())
