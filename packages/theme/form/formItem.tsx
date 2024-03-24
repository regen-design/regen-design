import { NAME_SPACE } from '@regen-design/constant'
import { FormProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-form-item`
export const StyledFormItemPrefixClass = prefix
export const StyledFormItem = styled.div<FormProps & ThemeProps>`
  display: grid;
  grid-template-areas:
    'label blank'
    'label feedback';
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  .${prefix}-label {
    grid-area: label;
    display: grid;
    align-items: center;
    grid-template-areas: 'text mark';
    grid-template-columns: 1fr auto;
    padding-right: 8px;
    min-height: ${props => props.theme.baseSizes.default};
    .${prefix}-label__text {
      grid-area: text;
      white-space: nowrap;
      text-align: right;
    }
    .${prefix}-label__mark {
      &.hidden {
        visibility: hidden;
      }
      height: auto;
      grid-area: mark;
      margin-left: 4px;
      color: #ff4d4f;
    }
  }
  .${prefix}-blank {
    grid-area: blank;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
  }
  .${prefix}-feedback {
    &__error {
      color: ${props => props.theme.colors.danger};
    }
    grid-area: feedback;
    margin-top: 4px;
    font-size: 14px;
    min-height: 24px;
    transform-origin: top;
  }
`
