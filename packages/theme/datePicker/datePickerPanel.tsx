import { convertTheme } from '../tools'
import styled from 'styled-components'
import { Size, ThemeConfig } from '@regen-design/types'
import { NAME_SPACE } from '@regen-design/constant'
import { rgba } from 'polished'

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
    return _theme.borderRadius
  }};
  pointer-events: auto;
  overflow: auto;
  display: grid;
  &.${prefix}--date {
    grid-template-areas:
      'header'
      'left-calendar'
      'footer'
      'action';
  }
  &.${prefix}--date-range {
    .${prefix}-calendar--start {
      grid-area: left-calendar;
    }
    .${prefix}-calendar--divider {
      grid-area: divider;
      height: 100%;
      width: 1px;
      background-color: ${props => {
        const _theme = convertTheme(props.theme)
        return _theme.borderColor
      }};
    }
    .${prefix}-calendar--end {
      grid-area: right-calendar;
    }
    grid-template-areas:
      'left-calendar divider right-calendar'
      'footer footer footer'
      'action action action';
  }
  .${prefix}-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: action;
    border-top: ${props => {
      const _theme = convertTheme(props.theme)
      return `1px solid ${_theme.borderColor}`
    }};
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.datePicker.panelActionsPadding
    }};
    .${prefix}-actions__suffix {
      align-self: flex-end;
      .${prefix}-actions__suffix-clear {
        margin-right: 8px;
      }
    }
  }
  .${prefix}-calendar {
    padding: ${props => {
      const _theme = convertTheme(props.theme)
      return _theme.components.datePicker.panelPadding
    }};
    display: grid;
    grid-template-columns: 1fr;
    grid-area: left-calendar;
    .${prefix}-dates {
      display: grid;
      position: relative;
      //gap: 4px;
      align-items: center;
      justify-items: center;
      flex-wrap: wrap;
      grid-template-columns: repeat(
        7,
        ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.dateItemSize
        }}
      );
      grid-template-rows: repeat(
        6,
        ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.dateItemSize
        }}
      );

      .${prefix}-dates__date {
        user-select: none;
        -webkit-user-select: none;
        position: relative;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          line-height: 28px;
        }
        &::before {
          z-index: -2;
        }
        &::after {
          z-index: -1;
        }
        &.${prefix}-dates__date-range--covered {
          &::before {
            width: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.components.datePicker.dateItemSize
            }};
            left: -8px;
          }
        }
        &.${prefix}-dates__date-range--start {
          &::before {
            width: 24px;
            left: 25%;
          }
          &.${prefix}-dates__date-range--start_end {
            &::before {
              left: -25%;
            }
          }
        }
        &.${prefix}-dates__date-range--end {
          &::before {
            width: 24px;
            left: -8px;
          }
        }
        &.${prefix}-dates__date-range--covered,&.${prefix}-dates__date-range--start {
          &::before {
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return rgba(_theme.colors.primary, 0.15)
            }};
          }
        }
        font-size: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.dateItemFontSize
        }};
        color: #333639;
        cursor: pointer;
        z-index: 0;
        transition: ${props => {
          const _theme = convertTheme(props.theme)
          return `background-color 300ms ${_theme.transition['ease-in']},
          color 300ms ${_theme.transition['ease-in']}`
        }};
        &:hover {
          background-color: #f3f3f5;
        }
        &.${prefix}-dates__date-selected {
          &::after {
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.colors.primary
            }};
          }
          color: ${props => {
            const _theme = convertTheme(props.theme)
            return _theme.colors.white
          }};
          transition: none;
        }

        &.${prefix}-dates__date-secondary {
          &.${prefix}-dates__date-range-selected_secondary {
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.colors.light
            }};
          }
          color: #d1d1d6;
        }
        &.${prefix}-dates__date-today.${prefix}-dates__date-selected {
          .${prefix}-dates__sup {
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.colors.light
            }};
          }
        }
        &.${prefix}-dates__date-today {
          .${prefix}-dates__sup {
            width: 4px;
            height: 4px;
            content: '';
            position: absolute;
            right: 1px;
            top: 1px;
            border-radius: 50%;
            background-color: ${props => {
              const _theme = convertTheme(props.theme)
              return _theme.colors.primary
            }};
          }
        }
      }
    }

    .${prefix}-weekdays {
      display: grid;
      margin: auto;
      width: 100%;
      align-items: center;
      justify-items: center;
      margin-bottom: 4px;
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      grid-template-rows: repeat(
        1,
        ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.weekdayItemSize
        }}
      );
      border-bottom: 1px solid #f3f3f5;

      .${prefix}-weekdays__day {
        user-select: none;
        -webkit-user-select: none;
        line-height: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.weekdayItemSize
        }};
        text-align: center;
        font-size: ${props => {
          const _theme = convertTheme(props.theme)
          return _theme.components.datePicker.weekdayItemFontSize
        }};
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
