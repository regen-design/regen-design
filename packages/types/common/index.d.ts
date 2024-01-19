import { ThemeConfig } from '../theme'
import { CSSProperties } from 'react'

export interface CommonType {
  /**
   * @description component theme
   * @type ThemeConfig
   */
  theme?: ThemeConfig
  /**
   * @default ''
   * @description icon className
   * @type string
   */
  className?: string
  /**
   * @default {}
   * @description icon style
   * @type CSSProperties
   */
  style?: CSSProperties
}

export type Size = 'tiny' | 'small' | 'medium' | 'large'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
