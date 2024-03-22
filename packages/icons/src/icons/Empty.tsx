import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const Empty = (props: IconProps) => {
  return (
    <Icon name="empty" {...props} svgViewBox={`0 0 512 512`}>
      <path
        d="M384.06,147.53c26.47,0,50.82,14.45,63.49,37.69l43.9,80.48c11.59,21.24,17.66,45.06,17.66,69.25v77.74
	c0,39.94-32.38,72.32-72.32,72.32H75.21c-39.94,0-72.32-32.38-72.32-72.32v-77.74c0-24.2,6.07-48.01,17.66-69.25l43.9-80.48
	c12.67-23.24,37.03-37.69,63.49-37.69H384.06z M186.78,340.37l-135.68-0.01v72.33c0,12.61,9.72,23.1,22.3,24.05l1.81,0.06h361.58
	c13.31,0,24.11-10.79,24.11-24.11c0,0,0,0,0,0v-72.33l-135.68,0.01l-23.35,20.13c-25.46,21.94-62.9,22.77-89.31,1.99l-2.43-2
	L186.78,340.37z M384.06,195.74H127.94c-8.82,0-16.94,4.82-21.16,12.56l-43.9,80.49c-0.61,1.11-1.2,2.24-1.76,3.37h125.66
	c10.57,0,20.84,3.47,29.24,9.88l2.23,1.81l23.36,20.12c7.69,6.63,18.92,7.15,27.19,1.25l1.59-1.25l23.36-20.13
	c8-6.89,18.05-10.97,28.59-11.59l2.88-0.08l125.66-0.01l-1.76-3.37l-43.9-80.48C401,200.55,392.88,195.74,384.06,195.74
	L384.06,195.74z M256,27c12.61,0,23.1,9.72,24.05,22.3l0.06,1.81v52.5c0.06,13.31-10.68,24.15-24,24.21
	c-12.69,0.06-23.26-9.74-24.15-22.41l-0.06-1.81v-52.5C231.89,37.79,242.69,27,256,27z M115.83,45.6l1.46,1.49l36.16,40.45
	c8.91,9.89,8.11,25.13-1.78,34.04c-9.34,8.42-23.59,8.24-32.72-0.42l-1.45-1.49L81.35,79.22c-8.91-9.89-8.11-25.13,1.78-34.04
	c9.34-8.42,23.59-8.24,32.72,0.42H115.83z M428.75,45.19c9.32,8.33,10.73,22.41,3.23,32.42l-1.33,1.62l-36.16,40.45
	c-8.86,9.93-24.1,10.8-34.03,1.94c-9.35-8.34-10.75-22.44-3.23-32.46l1.33-1.62l36.16-40.45C403.59,37.17,418.83,36.31,428.75,45.19
	L428.75,45.19z"
      />
    </Icon>
  )
}
Empty.displayName = 'Empty'
export default Empty