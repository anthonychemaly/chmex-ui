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
      <div className={styles.left}>{leftChild}</div>
      <div className={styles.right}>{rightChild}</div>
    </div>
  )
}

export default NavBar
