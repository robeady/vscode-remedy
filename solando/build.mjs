import * as fs from 'fs'
import * as path from 'path'
import theme from "./src"

// Generate the theme files
fs.mkdirSync(path.resolve(process.cwd(), "dist"), { recursive: true })
fs.writeFileSync(
  path.resolve(process.cwd(), "dist/solando-color-theme.json"),
  `${JSON.stringify(theme, null, 2)}\n`,
)
