import React from 'react'
import { Code, Typography } from 'chmex-ui'

const Installation = () => {
  return (
    <div id='installation' className='section'>
      <Typography kind='h3'>Installing Chmex UI</Typography>
      <Typography kind='p'>
        Chmex UI can be installed using either npm or yarn.
      </Typography>
      <Typography kind='h6'>npm</Typography>
      <Code style={{ marginBottom: 32 }}>npm i chmex-ui</Code>
      <Typography kind='h6'>yarn</Typography>
      <Code style={{ marginBottom: 32 }}>yarn add chmex-ui</Code>
      <Typography>
        Once the installation is complete, you are ready to start using Chmex UI
        components in your React project. Enjoy!
      </Typography>
    </div>
  )
}

export default Installation
