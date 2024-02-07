import { NAME_SPACE } from '@regen-design/constant'
import { QRCodeProps } from '@regen-design/types'
import styled from 'styled-components'
import { convertTheme } from '../tools'
const prefix = `${NAME_SPACE}-QRCode`
export const StyledQRCodePrefixClass = prefix
export const StyledQRCode = styled.div<QRCodeProps>`
  background: #fff;
  border-radius: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.borderRadius
  }};
  padding: ${props => {
    const _theme = convertTheme(props.theme)
    return _theme.paddingSizes['default']
  }};
  display: inline-flex;
`
