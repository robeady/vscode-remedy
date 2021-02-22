import { jsts as jstsscope } from '@remedy/tools/tmscopes'

function javascript({ code }) {
  const builtins = {
    scope: jstsscope([
      'support.variable.object',
      'support.type.object.module',
    ]),
    settings: {
      foreground: code.primitives,
    },
  }

  const language = {
    scope: [
      'source.js storage.type.js',
      'source.ts storage.type.ts',
      'source.tsx storage.type.tsx',
      'meta.embedded.block.javascript storage.type.js',
      'meta.embedded.block.typescript storage.type.ts',
      ...jstsscope([
        'storage.type.class',
        'storage.type.function',
      ]),
    ],
    settings: {
      foreground: code.language,
    },
  }

  const classes = {
    scope: jstsscope([
      'new.expr entity.name.type',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  const types = {
    scope: [
      'source.ts meta.type.annotation entity.name.type',
      'source.tsx meta.type.annotation entity.name.type',
      'meta.embedded.block.typescript meta.type.annotation entity.name.type',
      'meta.embedded.block.typescriptreact meta.type.annotation entity.name.type',
    ],
    settings: {
      foreground: code.types,
    },
  }

  const attributes = {
    scope: jstsscope([
      'variable.other.constant.property',
    ]),
    settings: {
      foreground: code.properties,
    },
  }

  const operators = {
    scope: jstsscope([
      'storage.type.function.arrow',
    ]),
    settings: {
      foreground: code.operators,
    },
  }

  return [
    builtins,
    language,
    classes,
    attributes,
    operators,
    types,
  ]
}

export default javascript
