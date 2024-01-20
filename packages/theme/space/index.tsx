import { NAME_SPACE } from '@regen-design/constant'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-space`
export const StyledSpacePrefixClass = prefix
export const StyledSpace = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  gap: 8px 12px;
`
