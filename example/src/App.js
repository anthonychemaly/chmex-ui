import React from 'react'

import { GradientButton, Button, Typography } from 'chmex-ui'
import 'chmex-ui/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 64
      }}
    >
      <Button text='Create React Library Example' kind='white-outline' />
      <Button text='Create React Library Example' kind='white' />
      <Button text='Create React Library Example' kind='primary' />
      <Button text='Create React Library Example' kind='primary-outline' />
      <Button text='Create React Library Example' kind='secondary' />
      <Button text='Create React Library Example' kind='secondary-outline' />
      <GradientButton
        text='yala'
        onClick={() => {
          alert('hi')
        }}
      />
      <Typography kind='h2'>Hello</Typography>
    </div>
  )
}
export default App
