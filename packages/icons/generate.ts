/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path'
import { convertToUpperCase } from '@regen-design/utils'
import * as fs from 'fs'
import * as prettier from 'prettier'

type SvgFile = {
  filename: string
  content: string
  componentOutName: string
  originName: string
  componentName: string
}
const formatSvg = (svg: string) => {
  return svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] || ''
}
const readSvgFiles = (): SvgFile[] => {
  const svgFolder = path.join(__dirname, './src/svg')
  const svgFiles = fs.readdirSync(svgFolder)
  return svgFiles.map(file => {
    const svgPath = path.join(svgFolder, file)
    const svgContent = fs.readFileSync(svgPath, 'utf-8')
    const componentName = path.basename(file, '.svg')

    const convertedComponentName = convertToUpperCase(componentName)
    return {
      filename: file,
      content: formatSvg(svgContent),
      originName: componentName,
      componentName: convertedComponentName,
      componentOutName: convertedComponentName + 'Icon',
    }
  })
}
const prettierConfig = fs.readFileSync(path.join(__dirname, '../../.prettierrc'), 'utf-8')
const generateIconComponent = (svgFiles: SvgFile[]) => {
  const iconComponentTemplate = (svg: SvgFile) => {
    const render = `
      import { IconProps } from '@regen-design/types'
      import { Icon } from '@regen-design/components/icon'
      const ${svg.componentName} = (props: IconProps) => {
        return (
          <Icon name="${svg.originName}" {...props}>
            ${svg.content}
          </Icon>
        )
      }
      ${svg.componentName}.displayName = '${svg.componentName}'
      export default ${svg.componentName}
    `
    return prettier.format(render, JSON.parse(prettierConfig || '{}'))
  }
  if (!fs.existsSync(path.join(__dirname, './src/icons'))) {
    fs.mkdirSync(path.join(__dirname, './src/icons'))
  }
  svgFiles.forEach(svg => {
    const iconComponent = iconComponentTemplate(svg)
    iconComponent.then(component => {
      const iconComponentPath = path.join(__dirname, `./src/icons/${svg.componentName}.tsx`)
      fs.writeFileSync(iconComponentPath, component)
    })
  })
}

const generateIconIndex = (svgFiles: SvgFile[]) => {
  const iconIndexTemplate = (svgFiles: SvgFile[]) => {
    const render = `
      ${svgFiles
        .map(svg => {
          return `export { default as ${svg.componentOutName} } from './icons/${svg.componentName}'`
        })
        .join('\n')}
    `
    return prettier.format(render, JSON.parse(prettierConfig || '{}'))
  }
  iconIndexTemplate(svgFiles).then(index => {
    const iconIndexPath = path.join(__dirname, './src/index.ts')
    fs.writeFileSync(iconIndexPath, index)
  })
}
const svgFiles = readSvgFiles()
generateIconComponent(svgFiles)
generateIconIndex(svgFiles)
