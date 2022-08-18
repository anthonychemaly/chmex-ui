import React from 'react'
import colors from '../../constants/colors'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'

const Typography = ({ kind, children, style }) => {
  const { dark } = useChmexTheme()

  return (
    <span
      className={styles[kind]}
      style={{ color: dark ? colors.white : colors.black, ...style }}
    >
      {children}
    </span>
  )
}

export default Typography
