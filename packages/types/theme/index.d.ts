export type Color = 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'dark' | 'light'

export type Animation = 'duration'

export interface ThemeConfig {
  colors: Record<Color, string>
  borderRadius: number
  theme?: 'light' | 'dark'
  borderColor: string
  animations: Record<Animation, string | number>
}
