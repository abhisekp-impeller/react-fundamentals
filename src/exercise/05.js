// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', style = {}, children = null, size}) => {
  const sizeMap = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
  }

  return (
    <div
      className={`box ${sizeMap[size] || ''} ${className}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
