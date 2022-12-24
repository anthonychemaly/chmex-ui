import React from 'react'

import { useChmexTheme } from '../../hooks'
import { getBorderColor } from './utils'

import styles from './styles.modules.scss'

const NavBar = ({ leftChild, rightChild, style }) => {
  const { colors, dark } = useChmexTheme()

  return (
    <div
      className={styles['nt-navbar']}
      style={{
        borderBottom: `1px solid ${getBorderColor(colors, dark)}`,

        ...style
      }}
    >
      <div className={styles['nt-left']}>{leftChild}</div>
      <div className={styles['nt-right']}>{rightChild}</div>
    </div>
  )
}

export default NavBar
