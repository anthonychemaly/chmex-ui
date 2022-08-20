import React from 'react'

import {
  GradientButton,
  Button,
  Typography,
  ChmexUIContext,
  TextInput
} from 'chmex-ui'
import 'chmex-ui/dist/index.css'

const App = () => {
  return (
    <ChmexUIContext.Provider
      value={{
        dark: false
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: 64
        }}
      >
        <Button
          text='Create React Library Example'
          kind='basic-outline'
          borderVariant='rounded'
          transition={false}
        />
        <TextInput placeholder='Create React Library Example' kind='standard' />
        <TextInput placeholder='Create React Library Example' kind='outlined' />

        <TextInput
          placeholder='Create React Library Example'
          kind='outlined-rounded'
          label='Create React Library Example'
          fullWidth
          error='Check your balance'
        />

        <Button text='Create React Library Example' kind='basic' />
        <Button text='Create React Library Example' kind='primary' />
        <Button text='Create React Library Example' kind='primary-outline' />
        <Button text='Create React Library Example' kind='secondary' />
        <Button text='Create React Library Example' kind='secondary-outline' />
        <Button text='Create React Library Example' kind='tertiary' />
        <Button text='Create React Library Example' kind='tertiary-outline' />
        <Button text='Create React Library Example' kind='transparent' />
        <GradientButton
          text='yala'
          onClick={() => {
            alert('hi')
          }}
        />
        <Typography kind='h2'>Hello</Typography>
      </div>
    </ChmexUIContext.Provider>
  )
}
export default App
