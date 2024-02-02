import { ThemeConfig } from '@regen-design/types'

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#6060e0',
    danger: '#e75050',
    success: '#33b770',
    warning: '#f3a400',
    info: '#5f99ff',
    dark: '#323538',
    light: '#fafafa',
    placeholder: '#c2c2c2',
  },
  fontSizes: {
    tiny: '10px',
    small: '12px',
    default: '14px',
    large: '16px',
  },
  baseSizes: {
    tiny: '24px',
    small: '32px',
    default: '36px',
    large: '40px',
  },
  paddingSizes: {
    tiny: '8px',
    small: '10px',
    default: '12px',
    large: '14px',
  },
  borderRadius: 3,
  borderColor: '#dfdfdf',
  borderDarkColor: '#4f4f52',
  waveBlurRadius: 6,
  waveDeepAmount: 0.2,
  animations: {
    duration: 300,
  },
  transition: {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
  },
  components: {
    select: {
      menuPadding: '4px',
      menuItemPadding: '8px',
      activeBackgroundColor: '#f5f5f5',
    },
    switch: {
      width: {
        tiny: '28px',
        small: '36px',
        default: '44px',
        large: '52px',
      },
      height: {
        tiny: '14px',
        small: '18px',
        default: '22px',
        large: '26px',
      },
      backgroundColor: {
        light: 'rgba(0, 0, 0, .14)',
        dark: 'rgba(255, 255, 255, .20)',
      },
    },
  },
  theme: 'light',
}
