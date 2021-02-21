import { foreground, normal, bright, greys, keywordBlue } from './colours'
import color from "color"

const plain = greys.darkest.hex()
const punctuation = greys.darkest.hex()
const primitives = normal.yellow.hex()
const comments = greys.mid.hex()
const language = keywordBlue.hex()
const preprocessor = normal.cyan.hex() // TODO what's this for
const functions = color.hsl(230, 95, 25).hex()
const classes = normal.cyan.hex()
const types = normal.cyan.hex()
const variables = greys.darkest.hex()
const dockblockVariables = normal.white.hex()
const constants = normal.yellow.hex()
const strings = normal.red.hex()
const escapes = normal.red.hex()

const operators = greys.darkest.hex()

const regexp = {
  // TODO improve this
  sequences: normal.orange.hex(),
  ranges: bright.red.hex(),
  charsets: normal.red.hex(),
}

// Markdown & similar tokens in other source files
const raw = normal.yellow.hex()
const quotes = foreground.darken(0.3).desaturate(0.7).hex()
const links = normal.cyan.hex()
const headings = bright.red.hex()

// JSON, YAML etc.
const keyvaluelike = {
  keys: normal.magenta.hex(),
}

export {
  plain,
  punctuation,
  primitives,
  comments,
  language,
  preprocessor,
  functions,
  classes,
  types,
  variables,
  dockblockVariables,
  constants,
  strings,
  escapes,
  operators,
  regexp,
  raw,
  quotes,
  links,
  headings,
  keyvaluelike,
}
