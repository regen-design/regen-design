import { convertTheme } from '../tools'
import styled from 'styled-components'
import { Size, ThemeConfig } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'

const prefix = `${NAME_SPACE}-panel`
export const StyledDatePickerPanelPrefixClass = prefix
export const StyledDatePickerPanel = styled.div<{
  theme?: ThemeConfig
  size: Size
}>`
  width: fit-content;
  height: fit-content;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: ${() => {
    return '#ffffff'
  }};
  border: ${props => {
    const _theme = convertTheme(props.theme)
    return `1px solid ${_theme.borderColor}`
  }};
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.borderRadius + 'px'
  }};
  pointer-events: auto;
  overflow: auto;

  .${prefix}-calendar {
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.datePicker.panelPadding
    }};
    display: grid;
    grid-template-columns: 1fr;
    grid-area: left-calendar;
    .${prefix}-weekdays {
      display: grid;
      margin: auto;
      align-items: center;
      justify-items: center;
      margin-bottom: 4px;
      grid-template-columns: repeat(7, 38px);
      grid-template-rows: repeat(1, 38px);
      border-bottom: 1px solid #f3f3f5;
      .${prefix}-weekdays__day {
        user-select: none;
        -webkit-user-select: none;
        line-height: 15px;
        width: 24px;
        text-align: center;
        font-size: 14px;
        color: #333639;
      }
    }
    .${prefix}-month {
      box-sizing: border-box;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.components.datePicker.monthTitleGridTemplateColumns
      }};
      height: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.components.datePicker.monthTitleHeight
      }};
      .${prefix}-month__month-year {
        -webkit-user-select: none;
        user-select: none;
        flex-grow: 1;
        position: relative;
        .${prefix}-month__text {
          &:hover {
            background-color: #f3f3f5;
          }
          padding: 2px 8px;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
          border-radius: 3px;
          color: #1f2225;
          transition: background-color 0.3s;
        }
      }
      .${prefix}-month__fast-prev,
        .${prefix}-month__fast-next,
        .${prefix}-month__prev,
        .${prefix}-month__next {
        line-height: 0;
        cursor: pointer;
        font-size: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.monthTitleIconSize
        }};
        width: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.monthTitleIconSize
        }};
        height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.monthTitleIconSize
        }};
        color: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.monthTitleIconColor
        }};
      }
    }
  }
`
