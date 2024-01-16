import React from 'react'
import { Button } from '@regen-design/components'
import { ThemeProvider } from '@regen-design/theme'
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
  ThemeProvider,
}
export default ReactLiveScope
