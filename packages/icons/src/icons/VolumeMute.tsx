import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const VolumeMute = (props: IconProps) => {
  return (
    <Icon name="volume-mute" {...props} svgViewBox={`0 0 24 24`}>
      <path d="m13.644.418c-.228-.19-.529-.268-.821-.215-3.001.555-5.754,2.302-7.554,4.794h-.271C2.241,4.998-.002,7.241-.002,9.998v4.005C-.002,16.76,2.241,19.003,4.998,19.003h.271c1.802,2.495,4.555,4.243,7.554,4.794.06.011.121.017.181.017.232,0,.459-.081.64-.231.228-.19.36-.472.36-.769V1.187c0-.297-.131-.579-.36-.769Zm-1.64,21.117c-2.03-.646-3.851-1.954-5.113-3.703l-.299-.415c-.188-.26-.489-.415-.811-.415h-.782c-1.654,0-3-1.346-3-3v-4.005c0-1.654,1.346-3,3-3h.782c.321,0,.623-.154.811-.415l.299-.415c1.261-1.747,3.083-3.054,5.114-3.702v19.068Zm11.729-7.242c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z" />
    </Icon>
  )
}
VolumeMute.displayName = 'VolumeMute'
export default VolumeMute