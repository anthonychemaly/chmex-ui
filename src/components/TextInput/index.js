import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'
import { getBgColor, getBorderColor, getColor } from './utils'

const TextInput = ({
  kind,
  borderColor,
  color,
  errorColor,
  labelColor,
  inputStyle,
  labelStyle,
  errorStyle,
  containerStyle,
  label,
  fullWidth,
  disabled,
  error,
  ...others
}) => {
  const { colors, dark } = useChmexTheme()

  return (
    <div
      style={{ width: fullWidth && '100%', ...containerStyle }}
      className={styles['nt-input-container']}
    >
      {label && (
        <span
          className={styles['nt-input-label']}
          style={{
            color: labelColor ? labelColor : getColor(colors, kind, dark),
            ...labelStyle
          }}
        >
          {label}
        </span>
      )}
      <input
        disabled={disabled}
        className={`${styles['nt-input']} ${styles[kind]}`}
        {...others}
        style={{
          backgroundColor: getBgColor(colors, kind, dark, disabled),
          borderColor: borderColor
            ? borderColor
            : getBorderColor(colors, kind, dark, disabled, error),
          color: color ? color : getColor(colors, kind, dark),
          width: fullWidth && '100%',
          borderStyle: disabled ? 'dotted' : 'solid',
          cursor: disabled ? 'not-allowed' : 'inherit',
          ...inputStyle
        }}
      />
      {error && (
        <span
          className={styles['nt-input-error']}
          style={{
            color: errorColor ? errorColor : colors.warning,
            ...errorStyle
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}

export default TextInput
