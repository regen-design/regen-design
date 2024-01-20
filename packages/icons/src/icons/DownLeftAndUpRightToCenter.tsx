import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const DownLeftAndUpRightToCenter = (props: IconProps) => {
  return (
    <Icon name="down-left-and-up-right-to-center" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M23.707,1.707l-5.405,5.405,2.463,2.463c.506,.506,.139,1.378-.58,1.383l-6.382,.042c-.446,.003-.806-.356-.803-.803l.042-6.382c.005-.72,.877-1.086,1.383-.58l2.463,2.463L22.293,.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414ZM10.197,13l-6.382,.042c-.72,.005-1.086,.877-.58,1.383l2.463,2.463L.293,22.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l5.405-5.405,2.463,2.463c.506,.506,1.378,.14,1.383-.58l.042-6.382c.003-.446-.356-.806-.803-.803Z" />
    </Icon>
  )
}
DownLeftAndUpRightToCenter.displayName = 'DownLeftAndUpRightToCenter'
export default DownLeftAndUpRightToCenter
