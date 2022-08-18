import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'
import { getBgColor, getBorderColor, getColor } from './utils'

const TextInput = ({ kind, borderColor, color, style, ...others }) => {
  const { colors, dark } = useChmexTheme()

  return (
    <input
      className={`${styles['nt-input']} ${styles[kind]}`}
      {...others}
      style={{
        backgroundColor: getBgColor(colors, kind, dark),
        borderColor: borderColor
          ? borderColor
          : getBorderColor(colors, kind, dark),
        color: color ? color : getColor(colors, kind, dark),
        ...style
      }}
    />
  )
}

export default TextInput
