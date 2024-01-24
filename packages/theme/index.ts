import { ThemeConfig } from '@regen-design/types'
import { useTheme as useThemeFn } from 'styled-components'
export const useTheme = useThemeFn as () => ThemeConfig
export * from './animations'
export * from './button'
export * from './card'
export * from './codeBlock'
export * from './grid'
export * from './gridItem'
export * from './icon'
export * from './space'
export * from './variable'
export * from './wave'
