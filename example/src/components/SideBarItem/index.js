import React from 'react'
import { Typography } from 'chmex-ui'

import './styles.css'

const SideBarItem = ({ label }) => {
  return (
    <div
      className={'sidebar-item'}
      onClick={() => {
        window.location.href = '/#' + label
      }}
    >
      <div className={'wrapper'}>
        <Typography kind='h6' style={{ margin: 0, fontSize: 15 }}>
          {label}
        </Typography>
      </div>
    </div>
  )
}

export default SideBarItem
