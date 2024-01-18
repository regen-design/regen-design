import { ThemeConfig } from '../theme'

export interface CommonType {
  theme?: ThemeConfig
  className?: string
}

export type Size = 'tiny' | 'small' | 'medium' | 'large'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
