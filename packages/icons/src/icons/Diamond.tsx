import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Diamond = (props: IconProps) => {
  return (
    <Icon name="diamond" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m23.22 5.743-3.011-4.068a4.005 4.005 0 0 0 -3.254-1.675h-9.91a4 4 0 0 0 -3.245 1.656l-3.065 4.097a3.993 3.993 0 0 0 .123 4.784l8.792 12.328a2.985 2.985 0 0 0 2.35 1.135 3.006 3.006 0 0 0 2.378-1.175l8.722-12.191a4 4 0 0 0 .12-4.891zm-4.628-2.892 3.018 4.078c.016.022.02.048.036.071h-4.892l-1.428-5h1.629a2.012 2.012 0 0 1 1.637.851zm-6.592 16.267-2.7-10.118h5.4zm-2.674-12.118 1.428-5h2.492l1.428 5zm-3.909-4.163a2.007 2.007 0 0 1 1.628-.837h1.629l-1.428 5h-4.928c.014-.022.018-.049.034-.07zm-2.969 6.488a1.9 1.9 0 0 1 -.185-.325h4.969l2.994 11.23zm11.323 10.915 3-11.24h4.986a2.1 2.1 0 0 1 -.243.421z" />
    </Icon>
  )
}
Diamond.displayName = 'Diamond'
export default Diamond