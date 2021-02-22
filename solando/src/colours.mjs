import color from 'color'

const base = color('#FFF')

const greys = {
  black: color.hsl(220, 15, 0),
  darkest: color.hsl(220, 15, 10),
  dark: color.hsl(220, 15, 45),
  mid: color.hsl(220, 10, 60),
  light: color.hsl(220, 15, 90),
  lightest: color.hsl(220, 15, 97),
  white: color.hsl(220, 15, 100),
}

// // --- MATERIAL-ITERM THEME ----
// const normal = {
//   black: color("#212121"),
//   red: color("#b7141e"),
//   green: color("#457b23"),
//   yellow: color("#f5971d"),
//   blue: color("#134eb2"),
//   magenta: color("#550087"),
//   cyan: color("#0e707c"),
//   white: color("#eeeeee"),

//   // my old extras
//     orange: color.hsl(25, 85, 35),
//   pink: color.hsl(330, 80, 40),
//   lime: color.hsl(80, 75, 30)
// }
// const bright = {
//  black: color("#424242"),
//  red: color("#e83a3f"),
//  green: color("#7aba39"),
//  yellow: color("#fee92e"),
//  blue: color("#53a4f3"),
//  magenta: color("#a94dbb"),
//  cyan: color("#26bad1"),
//  white: color("#d8d8d8"),
// }




// // --- PAPER VIM THEME ----------
// const normal ={
//   // paper
//   black: color("#EDEDED"),
//   red: color("#D7005F"),
//   green: color("#718C00"),
//   yellow: color("#D75F00"),
//   blue: color("#4271AE"),
//   magenta: color("#8959A8"),
//   cyan: color("#3E999F"),
//   white: color("#4D4D4C"),
//   // my old extras
//     orange: color.hsl(25, 85, 35),
//   pink: color.hsl(330, 80, 40),
//   lime: color.hsl(80, 75, 30)
// }
// const bright ={
//   // paper
//   black: color("#969694"),
//   red: color("#D7005F"),
//   green: color("#718C00"),
//   yellow: color("#D75F00"),
//   blue: color("#4271AE"),
//   magenta: color("#8959A8"),
//   cyan: color("#3E999F"),
//   white: color("#F5F5F5"),
// }


// --- MY THEME ATTEMPT ----------
const normal = {
  black: color('#282A2E'),
  blue: color.hsl(220, 75, 36),
  cyan: color.hsl(180, 72, 32),
  green: color.hsl(120, 75, 30),
  magenta: color.hsl(290, 90, 30),
  red: color.hsl(0, 76, 32),
  white: color('#707880'),
  yellow: color.hsl(50, 85, 30),
  // Extras
  orange: color.hsl(25, 85, 35),
  pink: color.hsl(330, 80, 40),
  lime: color.hsl(80, 75, 30)
}

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

const blues = { keyword:  normal.blue.saturate(0.4), secondary: normal.blue.lighten(0.1) }


const foreground = color.hsl(220, 10, 10)

export {
  base,
  foreground,
  normal,
  bright,
  blues,
  greys
}
