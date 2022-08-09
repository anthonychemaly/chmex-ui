import React from 'react'
import styles from './styles.modules.scss'

const Typography = ({ text, kind }) => {
  return <span className={styles[kind]}>{text}</span>
}

export default Typography
