import React, { useEffect, useState } from 'react'

import { Typography, ChmexUIContext, NavBar, Code } from 'chmex-ui'

import Sun from './assets/sun.png'
import Moon from './assets/moon.png'
import ChmexUILogo from './assets/chmex-ui.svg'

import { getDocumentation } from './network/ApiAxios'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [docs, setDocs] = useState([])

  const tryGetDocumentation = async () => {
    try {
      const { data, status } = await getDocumentation()
      if (status === 200) {
        setDocs(data.data)
      } else {
        alert('Err')
      }
    } catch (e) {
      alert('Err')
    }
  }

  useEffect(() => {
    tryGetDocumentation()
  }, [])

  function createElement(blockItem) {
    switch (blockItem.collection) {
      case 'typography':
        return (
          <Typography
            key={blockItem.id}
            kind={blockItem.item.kind}
            style={blockItem.item.style}
          >
            {blockItem.item.value}
          </Typography>
        )

      case 'code':
        return (
          <Code
            key={blockItem.id}
            code={blockItem.item.value}
            style={blockItem.item.style}
          />
        )

      default:
        break
    }
  }

  return (
    <ChmexUIContext.Provider
      value={{
        dark: isDarkMode
      }}
    >
      <div className={`page-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='sidebar'>
          <div className='title'>
            <img alt='Chmex UI Logo' src={ChmexUILogo} className='logo' />
            <Typography kind='h4' style={{ marginBottom: 0 }}>
              Chmex UI
            </Typography>
          </div>
        </div>
        <div className='documentation-wrapper'>
          <NavBar
            style={{ paddingInline: 64 }}
            leftChild={
              <div>{/* <h1 style={{ color: 'white' }}>hi</h1> */}</div>
            }
            rightChild={
              <img
                alt='dark-mode-toggle'
                src={isDarkMode ? Sun : Moon}
                className='mode-icon'
                onClick={() => {
                  setIsDarkMode(!isDarkMode)
                }}
              />
            }
          />
          <div className='documentation'>
            {docs?.map((section) => (
              <div id={section.id} className='section'>
                {section.field.map((blockItem) => createElement(blockItem))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChmexUIContext.Provider>
  )
}
export default App
