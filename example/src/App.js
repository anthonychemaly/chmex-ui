import React from 'react'

import { GradientButton, Button, Typography } from 'chmex-ui'
import 'chmex-ui/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button text='Create React Library Example 😄' kind='white-outline' />
      <GradientButton text='yala' />
      <Typography kind='h5' text='hello' />
    </div>
  )
}
export default App
