import { CommonType, HttpMethod } from '../common'
export interface UploadProps extends CommonType {
  /**
   * @description The address to which the request was submitted
   */
  action?: string
  /**
   * @description HTTP request method
   */
  method?: HttpMethod
  /**
   * @description The name of the file field in the request
   */
  name?: string
  /**
   * @description Additional parameters to be submitted
   */
  data?: { [key: string]: any }
  /**
   * @description response type of the request
   */
  responseType?: XMLHttpRequestResponseType
  /**
   * @description callback function, you can get the uploaded file and the corresponding file list
   */
  onChange?: (file: FileInfoType, fileList: FileInfoType[]) => void
  /**
   * @description callback function, you can remove the file from the list
   */
  onRemove?: (file: FileInfoType) => void
  /**
   * @description The file list before uploading, each item could be a file or a `FileInfo` with `uid` and `name`
   */
  fileList?: FileInfoType[]
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
  response?: any
}
