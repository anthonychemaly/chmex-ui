function getBgColor(colors, kind, dark) {
  switch (kind) {
    default:
      return colors.transparent
  }
}

function getBorderColor(colors, kind, dark) {
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
