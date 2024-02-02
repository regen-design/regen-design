import styled from 'styled-components'

export const StyledFollowerContainer = styled.div<{
  zIndex?: number
}>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 0;
  pointer-events: none;
  z-index: ${props => {
    if (props.zIndex) {
      return props.zIndex
    }
    return 'auto'
  }};
`
