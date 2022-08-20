function getBgColor(colors, kind, dark, disabled) {
  if (disabled) {
    return colors.disabledBg
  }

  switch (kind) {
    default:
      return colors.transparent
  }
}

function getBorderColor(colors, kind, dark, disabled, error) {
  if (error) {
    return colors.warning
  }
  if (disabled) {
    return colors.grey
  }

  switch (kind) {
    default:
      return dark ? colors.white : colors.black
  }
}

function getColor(colors, kind, dark) {
  switch (kind) {
    default:
      return dark ? colors.white : colors.black
  }
}

export { getBgColor, getBorderColor, getColor }
