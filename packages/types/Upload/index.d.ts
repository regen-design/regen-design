import { CommonType } from '../common'
export interface UploadProps extends CommonType {
  /**
   * @description The address to which the request was submitted
   */
  action?: string
  /**
   * @description HTTP request method
   */
  method?: 'POST' | 'PUT'
}

export interface FileInfoType {
  uid: string
  name: string
  status: 'pending' | 'uploading' | 'error' | 'done' | 'removed'
  percent?: number
  lastModified?: number
  size?: number
  file?: File
  url?: string
  thumbnailUrl?: string
  type?: string
}
