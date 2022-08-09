import React from 'react'
import styles from './styles.modules.scss'

const Button = ({ kind, text, style, onClick }) => {
  return (
    <span
      className={`${styles['nt-btn']} ${styles[kind]}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default Button
