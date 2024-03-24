import { NAME_SPACE } from '@regen-design/constant'
import { DynamicTagsProps, ThemeProps } from '@regen-design/types'
import styled from 'styled-components'
const prefix = `${NAME_SPACE}-dynamicTags`
export const StyledDynamicTagsPrefixClass = prefix
export const StyledDynamicTags = styled.div<DynamicTagsProps & ThemeProps>``
