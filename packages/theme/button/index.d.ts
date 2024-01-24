/// <reference types="react" />
import { ButtonProps } from '@regen-design/types'
export declare const StyledButtonPrefixClass = 'regen-button'
export declare const StyledButton: import('styled-components').IStyledComponent<
  'web',
  import('styled-components/dist/types').Substitute<
    import('react').DetailedHTMLProps<
      import('react').ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ButtonProps & {
      isLoading: boolean
    }
  >
>
