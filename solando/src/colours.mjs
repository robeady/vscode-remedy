import color from 'color'

const base = color('#FFF')

const greys = {
  black: color.hsl(220, 15, 0),
  darkest: color.hsl(220, 15, 15),
  dark: color.hsl(220, 15, 45),
  mid: color.hsl(220, 10, 60),
  light: color.hsl(220, 15, 90),
  lightest: color.hsl(220, 15, 97),
  white: color.hsl(220, 15, 100),
}

const normal = {
  black: color('#282A2E'),
  blue: color.hsl(230, 70, 43),
  cyan: color.hsl(180, 70, 33),
  green: color.hsl(120, 75, 30),
  magenta: color.hsl(285, 80, 36),
  red: color.hsl(0, 76, 32),
  white: color('#707880'),
  yellow: color.hsl(50, 85, 30),
  // Extras
  orange: color('#cc6953'),
}

const keywordBlue = normal.blue.saturate(0.3)

const bright = {
  black: color('#373B41'),
  blue: normal.blue.lighten(0.45).saturate(0.25),
  cyan: normal.cyan.lighten(0.25).saturate(0.1),
  green: normal.green.lighten(0.35).saturate(0.1),
  magenta: normal.magenta.lighten(0.35).saturate(0.1),
  red: normal.red.lighten(0.3).saturate(0.1),
  white: color('#C5C8C6'),
  yellow: normal.yellow.lighten(0.25).saturate(0.1)
}

// original colors (they are probably garbage)
// const normal = {
//   black: color('#282A2E'),
//   blue: color('#5F819D'),
//   cyan: color('#5E8D87'),
//   green: color('#8C9440'),
//   magenta: color('#85678F'),
//   red: color('#A54242'),
//   white: color('#707880'),
//   yellow: color('#DE935F'),
//   // Extras
//   orange: color('#cc6953'),
// }

// const bright = {
//   black: color('#373B41'),
//   blue: color('#81A2BE'),
//   cyan: color('#8ABEB7'),
//   green: color('#B5BD68'),
//   magenta: color('#B294BB'),
//   red: color('#CC6666'),
//   white: color('#C5C8C6'),
//   yellow: color('#F0C674'),
// }

const foreground = color.hsl(220, 10, 10)

export {
  base,
  foreground,
  normal,
  bright,
  keywordBlue,
  greys
}
