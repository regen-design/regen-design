import { FC, useRef, useState } from 'react'
import { FileInfoType, UploadProps } from '@regen-design/types'
import { StyledUpload, StyledUploadPrefixClass as prefixClass } from '@regen-design/theme'
import classNames from 'classnames'
import { CloseIcon, PaperclipVerticalIcon } from '@regen-design/icons'
import { Button } from '../button'
export const Upload: FC<UploadProps> = ({
  style = {},
  className = '',
  children,
  action,
  method = 'POST',
}) => {
  const UploadClass = classNames(prefixClass, className)
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<FileInfoType[]>([])
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files || files.length === 0) return
    for (const file of files) {
      const fileInfo: FileInfoType = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        status: 'uploading',
        percent: 0,
        file,
        uid: `${file.lastModified}_${file.name}_${Math.random().toString(36).slice(2)}`,
      }
      submitImpl(fileInfo)
      setFileList(prev => [...prev, fileInfo])
      fileRef.current.value = null
    }
  }
  const appendData = (formData: FormData, data: Record<string, any>) => {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key])
      }
    }
  }
  const handlerUpdateFileList = () => {
    setFileList(fileList => [...fileList])
  }
  const submitImpl = (fileInfo: FileInfoType) => {
    const request = new XMLHttpRequest()
    const formData = new FormData()
    appendData(formData, {})
    if (fileInfo.file !== null) {
      formData.append('file', fileInfo.file)
    }
    if (action !== undefined) {
      request.open(method.toUpperCase(), action)
      request.send(formData)
      fileInfo.status = 'uploading'
      handlerUpdateFileList()
    }
    // 进度
    request.upload.addEventListener('progress', event => {
      console.log(event)
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100
        fileInfo.percent = Number(percentComplete.toFixed(2))
        handlerUpdateFileList()
      }
    })
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          fileInfo.status = 'done'
          fileInfo.percent = 100
          handlerUpdateFileList()
        } else {
          fileInfo.status = 'error'
          handlerUpdateFileList()
        }
      }
    }
  }
  return (
    <StyledUpload role="Upload" className={UploadClass} style={style}>
      <input
        ref={fileRef}
        type="file"
        className={`${prefixClass}-file-input`}
        onChange={handleFileInputChange}
      />
      <div
        className={`${prefixClass}-trigger`}
        onClick={() => {
          if (fileRef.current) {
            fileRef.current.click()
          }
        }}
      >
        {children}
      </div>
      <div className={`${prefixClass}-file-list`}>
        {fileList.map(file => {
          const className = classNames(`${prefixClass}-file`, {
            [`${prefixClass}-file--${file.status}-status`]: file.status,
          })
          return (
            <div key={file.uid} className={className}>
              <div className={`${prefixClass}-file-info`}>
                <div className={`${prefixClass}-file-info__thumbnail`}>
                  <PaperclipVerticalIcon />
                </div>
                <div className={`${prefixClass}-file-info__name`}>{file.name}</div>
                <Button
                  icon={<CloseIcon />}
                  onClick={() => {
                    setFileList(fileList.filter(f => f.uid !== file.uid))
                  }}
                  size={'large'}
                  text
                />
              </div>
              <div className={`${prefixClass}-file-percent`}>
                <div
                  className={`${prefixClass}-file-percent__inner`}
                  style={{
                    width: file.percent + '%',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </StyledUpload>
  )
}
