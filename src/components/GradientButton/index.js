import React from 'react'
import styles from './styles.modules.scss'

const GradientButton = ({ text }) => {
  return (
    <span className={`${styles['gradientButton']}`}>
      <span className={`${styles['gradientButtonText']}`}>{text}</span>
    </span>
  )
}

export default GradientButton
