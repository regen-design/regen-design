/// <reference types="react" />
import { CodeBlockProps } from '@regen-design/types'
export declare const StyledCodeBlockPrefixClass = 'regen-code-block'
export declare const StyledCodeBlock: import('styled-components').IStyledComponent<
  'web',
  import('styled-components/dist/types').Substitute<
    import('react').DetailedHTMLProps<
      import('react').HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    CodeBlockProps & {
      isExpand: boolean
    }
  >
>
