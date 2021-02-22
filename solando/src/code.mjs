import { foreground, normal, bright, greys, blues } from './colours'

const plain = greys.darkest.hex()
const punctuation = greys.darkest.hex()
const primitives = normal.yellow.hex()
const comments = greys.mid.hex()
const language = blues.keyword.hex()
const languageSecondary = blues.secondary.hex()
const preprocessor = normal.cyan.hex() // TODO what's this for
const functions = normal.blue.darken(0.3).saturate(0.3).hex()
const classes = normal.cyan.hex()
const types = normal.cyan.hex()
const variables = greys.darkest.hex()
const dockblockVariables = normal.white.hex()
const constants = normal.yellow.hex()
const strings = normal.red.hex()
const escapes = normal.red.hex()

const operators = greys.darkest.hex()
const properties = normal.magenta.hex()

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
  languageSecondary,
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
  properties,
  regexp,
  raw,
  quotes,
  links,
  headings,
  keyvaluelike,
}
