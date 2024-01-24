import { ThemeConfig } from '@regen-design/types'

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#6060e0',
    danger: '#e75050',
    success: '#33b770',
    warning: '#f3a400',
    info: '#5f99ff',
    dark: '#18181c',
    light: '#fafafa',
  },
  fontSizes: {
    tiny: '12px',
    small: '14px',
    default: '16px',
    large: '18px',
  },
  baseSizes: {
    tiny: '24px',
    small: '32px',
    default: '36px',
    large: '40px',
  },
  paddingSizes: {
    tiny: '10px',
    small: '14px',
    default: '16px',
    large: '20px',
  },
  borderRadius: 3,
  borderColor: '#dfdfdf',
  borderDarkColor: '#4f4f52',
  waveBlurRadius: 6,
  waveDeepAmount: 0.2,
  animations: {
    duration: 300,
  },
  theme: 'light',
}
