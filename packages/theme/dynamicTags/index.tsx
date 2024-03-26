import { NAME_SPACE } from '@regen-design/constant'
import { DynamicTagsProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-dynamicTags`
export const StyledDynamicTagsPrefixClass = prefix
export const StyledDynamicTags = styled.div<DynamicTagsProps<string> & ThemeProps>`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  gap: 4px 8px;
  --r-input-width: 64px;
  .${prefix}-input {
    width: ${() => 'var(--r-input-width)'};
  }
`
