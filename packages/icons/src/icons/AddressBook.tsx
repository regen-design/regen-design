import { IconProps } from '@regen-design/types'
import { Icon } from '@regen-design/components/icon'
const AddressBook = (props: IconProps) => {
  return (
    <Icon name="address-book" {...props}>
      <path d="M18,0H8A5,5,0,0,0,3.424,3H2A1,1,0,0,0,2,5H3V7H2A1,1,0,0,0,2,9H3v2H2a1,1,0,0,0,0,2H3v2H2a1,1,0,0,0,0,2H3v2H2a1,1,0,0,0,0,2H3.424A5,5,0,0,0,8,24H18a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,18,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2H18a3,3,0,0,1,3,3Zm-8-7a3,3,0,0,0,0-6A3,3,0,0,0,13,12Zm5,6a1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0C8.211,11.392,17.791,11.394,18,18Z" />
    </Icon>
  )
}
AddressBook.displayName = 'AddressBook'
export default AddressBook
