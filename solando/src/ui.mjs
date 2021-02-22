import { base, normal, bright, greys } from './colours'
import tw from "./tailwind"

const text = {
  primary: greys.darkest,
  // TODO: what are the rest of these for
  secondary: greys.dark,
  dimmed: greys.darkest.lighten(1.6).desaturate(0.5),
  contrast: base.lighten(0.8),
  complimentary: bright.yellow.darken(0.9).desaturate(0.3),
}

const background = {
  code: greys.white,
  panel: greys.lightest,
  outer: greys.light,
  // TODO: what's this for?
  drop: text.primary,
}

const border = greys.light
// TODO: maybe shadows need to be a bit darker
const shadow = greys.light
const accent = normal.blue

const button = {
  primary: accent,
  secondary: normal.yellow,
}

const icon = {
  foreground: text.primary,
  inactive: greys.mid,
  error: normal.red,
  success: normal.green,
}

const scm = {
  added: bright.green,
  modified: bright.blue,
  deleted: bright.red,
  conflicting: bright.yellow,
  untracked: normal.white,
  ignored: text.dimmed,
  conflicts: {
    current: bright.green,
    incoming: bright.blue,
    common: bright.white,
  },
}

const highlight = {
  line: text.primary,
  word: {
    highlight: text.primary,
    matches: normal.cyan,
    source: accent,
  },
  selection: bright.blue,
  hover: text.primary,
  range: text.primary,
}

const problems = {
  error: normal.red,
  warning: normal.yellow,
  info: normal.blue,
  hint: normal.white,
}

const debug = {
  breakpoint: {
    active: bright.red,
    disabled: normal.red,
    unverified: normal.white,
  },
  frame: {
    normal: normal.green,
    focused: bright.green,
  },
  icon: {
    start: normal.orange,
    pause: normal.orange,
    continue: normal.orange,
    next: bright.blue,
    back: bright.blue,
    into: bright.blue,
    out: bright.blue,
    restart: bright.green,
    stop: normal.red,
  },
}

const terminal = {
  normal: {
    black: normal.black,
    blue: normal.blue,
    cyan: normal.cyan,
    green: normal.green,
    magenta: normal.magenta,
    red: normal.red,
    white: normal.white,
    yellow: normal.yellow,
  },
  bright: {
    black: bright.black,
    blue: bright.blue,
    cyan: bright.cyan,
    green: bright.green,
    magenta: bright.magenta,
    red: bright.red,
    white: bright.white,
    yellow: bright.yellow,
  },
}

export {
  button,
  background,
  border,
  shadow,
  text,
  accent,
  icon,
  scm,
  highlight,
  problems,
  debug,
  terminal,
}
