import React from 'react'

import { Typography, ChmexUIContext, NavBar } from 'chmex-ui'
import 'chmex-ui/dist/index.css'
import Overview from './sections/Overview'
import Installation from './sections/Installation'

const App = () => {
  return (
    <ChmexUIContext.Provider
      value={{
        dark: true
      }}
    >
      <div className='page-container'>
        <div className='sidebar'></div>
        <div className='documentation-wrapper'>
          <NavBar
            style={{ paddingInline: 64 }}
            leftChild={
              <div>
                <h1 style={{ color: 'white' }}>hi</h1>
              </div>
            }
            rightChild={
              <div>
                <h1 style={{ color: 'yellow' }}>Light</h1>
              </div>
            }
          />
          <div className='documentation'>
            <Typography kind='h1'>
              Hey! Welcome to Chmex UI Documentation
            </Typography>
            <Typography kind='h4'>
              This is your all-need guide to use Chmex UI in your app.
            </Typography>

            <Overview />
            <Installation />
          </div>
        </div>
      </div>
    </ChmexUIContext.Provider>
  )
}
export default App
