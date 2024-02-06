/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path'
import { convertToUpperCase } from '@regen-design/utils'
import * as fs from 'fs'
import * as prettier from 'prettier'
import * as cliProgress from 'cli-progress'
import * as colors from 'ansi-colors'

// create new progress bar
const b1 = new cliProgress.SingleBar({
  format: 'Generate Icons |' + colors.blue('{bar}') + '| {percentage}% || {value}/{total} Chunks',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
})

type SvgFile = {
  filename: string
  content: string
  componentOutName: string
  originName: string
  componentName: string
  svgViewBox: string
}
const formatSvg = (svg: string) => {
  return svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] || ''
}
const readSvgFiles = (): SvgFile[] => {
  const svgFolder = path.join(__dirname, './src/svg')
  const svgFiles = fs.readdirSync(svgFolder)
  b1.start(svgFiles.length, 0)
  return svgFiles.map(file => {
    if (!file.endsWith('.svg')) {
      throw new Error(`must be svg file: ${file}`)
    }
    if (!/^[a-zA-Z0-9-]+$/g.test(file.replace('.svg', ''))) {
      throw new Error(`Invalid svg file name: ${file}`)
    }
    const svgPath = path.join(svgFolder, file)
    const svgContent = fs.readFileSync(svgPath, 'utf-8')
    const componentName = path.basename(file, '.svg')
    const svgViewBox = svgContent.match(/viewBox="([^"]*)"/)?.[1] || ''
    const convertedComponentName = convertToUpperCase(componentName)
    return {
      filename: file,
      content: formatSvg(svgContent),
      originName: componentName,
      componentName: convertedComponentName,
      componentOutName: convertedComponentName + 'Icon',
      svgViewBox,
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
          <Icon name="${svg.originName}" {...props} svgViewBox={\`${svg.svgViewBox}\`}>
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
    b1.increment()
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
const generateIconsList = (svgFiles: SvgFile[]) => {
  const render = `
  import * as Icons from './src/index'
  export const SvgIcons = {
    ${svgFiles
      .map(svgFile => {
        return `${svgFile.componentOutName}: Icons.${svgFile.componentOutName}`
      })
      .join(',\n')}
  }
  `
  const filePath = path.join(__dirname, './icons.ts')
  prettier.format(render, JSON.parse(prettierConfig || '{}')).then(content => {
    fs.writeFile(
      filePath,
      content,
      {
        encoding: 'utf-8',
      },
      () => {
        console.log('\n\n' + colors.green('write icons list file success') + '\n\n')
        b1.stop()
        process.exit(0)
      }
    )
  })
}
const svgFiles = readSvgFiles()
generateIconComponent(svgFiles)
generateIconIndex(svgFiles)
generateIconsList(svgFiles)
