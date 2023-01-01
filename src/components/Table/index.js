import React from 'react'
import styles from './styles.modules.scss'

const Table = ({ children, style }) => {
  return (
    <table className={styles.table} style={style}>
      {children}
    </table>
  )
}

export default Table
