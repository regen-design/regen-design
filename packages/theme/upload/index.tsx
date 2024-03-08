import { NAME_SPACE } from '@regen-design/constant'
import { UploadProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
import { rgba } from 'polished'
const prefix = `${NAME_SPACE}-upload`
export const StyledUploadPrefixClass = prefix
export const StyledUpload = styled.div<UploadProps & ThemeProps>`
  width: 100%;
  .${prefix}-file-input {
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
  }
  .${prefix}-trigger {
    display: inline-block;
    box-sizing: border-box;
    opacity: 1;
    transition: ${props => {
      return `opacity .3s ${props.theme.transition['ease-in']}`
    }};
  }
  .${prefix}-trigger:hover {
    cursor: pointer;
  }
  .${prefix}-trigger + .${prefix}-file-list {
    margin-top: 8px;
  }
  --r-bezier: ${props => props.theme.transition['ease-in']};
  --r-item-color: ${props => props.theme.colors.black};
  --r-item-hover-color: ${props => rgba(props.theme.colors.zinc, 0.15)};
  --r-item-error-color: ${props => props.theme.colors.danger};
  --r-item-error-hover-color: ${props => rgba(props.theme.colors.danger, 0.1)};
  --r-item-success-color: ${props => props.theme.colors.success};
  --r-item-success-hover-color: ${props => rgba(props.theme.colors.success, 0.1)};
  .${prefix}-file-list {
    .${prefix}-file {
      position: relative;
      &:hover {
        background-color: ${() => `var(--r-item-hover-color)`};
      }
      &.${prefix}-file--error-status {
        &:hover {
          background-color: ${() => `var(--r-item-error-hover-color)`};
        }
        .${prefix}-file-info {
          .${prefix}-file-info__thumbnail, .${prefix}-file-info__name {
            color: ${() => `var(--r-item-error-color)`};
          }
        }
      }
      .${prefix}-file-percent {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: ${() => `var(  --r-item-hover-color)`};
        .${prefix}-file-percent__inner {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          background-color: ${() => `var(  --r-item-success-color)`};
          transition:
            background-color 0.3s ${() => `var(--r-bezier)`},
            width 0.3s ${() => `var(--r-bezier)`};
        }
      }
      .${prefix}-file-info {
        .${prefix}-file-info__thumbnail, .${prefix}-file-info__name {
          color: ${() => `var(--r-item-color)`};
        }
        .${prefix}-file-info__thumbnail {
          font-size: 18px;
          opacity: 1;
          transition: opacity 0.2s ${() => `var(--r-bezier)`};
        }
        .${prefix}-file-info__name {
          flex: 1;
          display: flex;
          justify-content: center;
          text-overflow: ellipsis;
          overflow: hidden;
          flex-direction: column;
          text-decoration-color: #0000;
          font-size: ${props => {
            return `${props.theme.fontSizes.default}`
          }};
          transition:
            color 0.3s ${() => `var(--r-bezier)`},
            text-decoration-color 0.3s ${() => `var(--r-bezier)`};
        }
        position: relative;
        padding-top: 6px;
        padding-bottom: 6px;
        display: flex;
        flex-wrap: nowrap;
      }
      display: block;
      box-sizing: border-box;
      cursor: default;
      padding: 0 12px 0 6px;
      transition: background-color 0.3s ${() => `var(--r-bezier)`};
      border-radius: ${props => {
        return `${props.theme.borderRadius}`
      }};
    }
    line-height: 1.5;
    opacity: 1;
    transition: opacity 0.3s ${() => `var(--r-bezier)`};
  }
`
