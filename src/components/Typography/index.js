import React from 'react'
import styles from './styles.modules.scss'

const Typography = ({ text, kind, children }) => {
  return <span className={styles[kind]}>{children}</span>
}

export default Typography
