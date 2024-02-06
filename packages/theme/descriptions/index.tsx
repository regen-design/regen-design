import { NAME_SPACE } from '@regen-design/constant'
import { DescriptionsProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-descriptions`
export const StyledDescriptionsPrefixClass = prefix
export const StyledDescriptions = styled.div<DescriptionsProps>`
  font-size: ${props => {
    const _theme = props.theme
    return _theme.fontSizes.default
  }};

  .${prefix}-header {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .${prefix}-header__title {
      display: inline-block;
    }
    .${prefix}-header__extra {
      display: inline-block;
    }
  }

  .${prefix}-wrapper {
    border: ${props => {
      const _theme = props.theme
      if (props.bordered) {
        return `1px solid ${_theme.components.descriptions.borderColor}`
      }
    }};
    border-radius: ${props => {
      const _theme = props.theme
      if (props.bordered) {
        return _theme.borderRadius
      }
    }};

    .${prefix}-table {
      width: 100%;
      box-sizing: border-box;
      table-layout: fixed;
      display: table;
      border-collapse: ${props => {
        if (props.bordered) {
          return 'collapse'
        }
        return 'separate'
      }};
      text-indent: initial;
      border-spacing: 0;
      margin-bottom: 0;

      tbody {
        width: 100%;
      }
      .${prefix}-row:last-of-type {
        border-bottom: none;
      }
      .${prefix}-row {
        background-color: transparent;
        box-sizing: border-box;
        border-top: 0;
        border-bottom: ${props => {
          const _theme = props.theme
          if (props.bordered) {
            return `1px solid ${_theme.components.descriptions.borderColor}`
          }
        }};

        > .${prefix}-row__item-label, .${prefix}-row__item-content {
          border: none;
          border-right: ${props => {
            const _theme = props.theme
            if (props.bordered) {
              return `1px solid ${_theme.components.descriptions.borderColor}`
            }
          }};
        }
        > .${prefix}-row__item-content:last-of-type {
          border-right: none;
        }
        > .${prefix}-row__item-label {
        }
        > .${prefix}-row__item-label {
          background-color: ${props => {
            const _theme = props.theme
            if (props.bordered) {
              return _theme.components.descriptions.labelBackgroundColor
            }
          }};
          padding: ${props => {
            const _theme = props.theme
            if (props.bordered) {
              return _theme.components.descriptions.labelPadding
            }
          }};
        }
        > .${prefix}-row__item-content {
          padding: ${props => {
            const _theme = props.theme
            if (props.bordered) {
              return _theme.components.descriptions.contentPadding
            }
          }};
        }
        .${prefix}-row__item {
          box-sizing: border-box;
          text-align: left;
          font-weight: 400;
          line-height: 1.5;
          padding: ${props => {
            if (props.bordered) {
              return 0
            }
            return `0 0 16px`
          }};
          border: none;

          .${prefix}-row__item-container {
            display: flex;

            .${prefix}-row__item-label {
              padding-right: 16px;
              display: inline-flex;
              align-items: baseline;
            }

            .${prefix}-row__item-content {
              flex: 1;
              display: inline-flex;
              align-items: baseline;
            }
          }
        }
      }
    }
  }
`
