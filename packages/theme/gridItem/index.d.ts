/// <reference types="react" />
import { GridItemProps, GridProps } from '@regen-design/types'
export declare const StyledGridItemPrefixClass = 'regen-gridItem'
export declare const StyledGridItem: import('styled-components').IStyledComponent<
  'web',
  import('styled-components/dist/types').Substitute<
    import('react').DetailedHTMLProps<
      import('react').HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    GridItemProps & Pick<GridProps, 'cols' | 'xGap' | 'yGap'>
  >
>
