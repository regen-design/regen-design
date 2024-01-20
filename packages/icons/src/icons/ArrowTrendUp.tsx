import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const ArrowTrendUp = (props: IconProps) => {
  return (
    <Icon name="arrow-trend-up" {...props} svgViewBox={`0 0 24 24`}>
      <path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z" />
    </Icon>
  )
}
ArrowTrendUp.displayName = 'ArrowTrendUp'
export default ArrowTrendUp
