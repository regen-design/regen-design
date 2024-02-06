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
    white: 'rgb(255,255,255)',
    black: 'rgb(0,0,0)',
  },
  fontSizes: {
    tiny: '12px',
    small: '14px',
    default: '14px',
    large: '16px',
  },
  baseSizes: {
    tiny: '24px',
    small: '28px',
    default: '34px',
    large: '40px',
  },
  paddingSizes: {
    tiny: '8px',
    small: '10px',
    default: '12px',
    large: '14px',
  },
  borderRadius: '3px',
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
    slider: {
      height: '4px',
      thumbSize: '18px',
      thumbColor: 'rgb(255, 255, 255)',
      thumbBorderColor: '',
      backgroundColor: 'rgb(219, 219, 223)',
      darkBackgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    rate: {
      space: '6px',
      iconSizes: {
        tiny: '12px',
        small: '16px',
        default: '20px',
        large: '24px',
      },
    },
    datePicker: {
      paddingSizes: {
        tiny: '8px',
        small: '10px',
        default: '12px',
        large: '14px',
      },
      panelPadding: '10px 12px 4px 12px',
      monthTitleIconSize: '14px',
      monthTitleIconColor: '#c2c2c2',
      monthTitleGridTemplateColumns: '28px 28px 1fr 28px 28px',
      monthTitleHeight: '28px',
      dateItemSize: '38px',
      dateItemFontSize: '14px',
      weekdayItemSize: '28px',
      weekdayItemFontSize: '14px',
      panelActionsPadding: '6px 12px',
    },
    avatar: {
      size: {
        tiny: '28px',
        small: '34px',
        default: '40px',
        large: '48px',
      },
      fontSize: '14px',
    },
    descriptions: {
      labelBackgroundColor: '#fafafa',
      labelPadding: '12px 10px',
      contentPadding: '16px 24px',
      borderColor: '#ebeef5',
    },
    tag: {
      padding: {
        tiny: '0 4px',
        small: '0 6px',
        default: '0 8px',
        large: '0 10px',
      },
      height: {
        tiny: '20px',
        small: '24px',
        default: '28px',
        large: '32px',
      },
    },
  },
  theme: 'light',
}

defaultTheme.components.slider.thumbBorderColor = defaultTheme.borderColor
