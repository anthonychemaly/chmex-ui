import React from 'react'
import styles from './styles.modules.scss'
// import { useChmexTheme } from '../../hooks'

const Code = ({ style, children }) => {
  //   const { colors, dark } = useChmexTheme()

  return (
    <pre className={styles.pre} style={{ ...style }}>
      <button
        onClick={() => {
          navigator.clipboard.writeText(children)
        }}
        className={styles.copy}
      >
        Copy
      </button>
      <code className={styles.code}>{children}</code>
    </pre>
  )
}

export default Code
