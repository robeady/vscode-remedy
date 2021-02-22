function common({ code }) {
  const primitives = {
    name: 'Primitive values',
    scope: [
      'constant.numeric',
      'support.constant',
    ],
    settings: {
      foreground: code.primitives,
    },
  }

  const comments = {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
    ],
    settings: {
      foreground: code.comments,
    },
  }

  const language = {
    name: 'Language keywords',
    scope: [
      'keyword',
      'storage',
      // Re-specified due to conflict with 'storage.type' scope
      'storage.type.class',
      'storage.type.enum',
      'storage.type.function',
      'storage.type.interface',
      'storage.type.internaldeclaration',
      'storage.type.modifier',
      'storage.type.namespace',
      'storage.type.property',
      'storage.type.trait',
      'storage.type.type',
    ],
    settings: {
      foreground: code.language
    }
  }

  const languageSecondary = {
    name: 'Language tokens',
    scope: [
      'support.type.builtin',
      'support.type.primitive'
    ],
    settings: {
      foreground: code.languageSecondary ?? code.language,
    },
  }

  const languageConstants = {
    name: 'Language constants',
    scope: [
      'constant.language'
    ],
    settings: {
      foreground: code.languageConstants ?? code.language
    }
  }

  const languageVariables = {
    name: 'Language variables',
    scope: [
      'variable.language'
    ],
    settings: {
      foreground: code.languageVariables ?? code.language
    }
  }

  const operators = {
    name: "operators",
    scope: [
      "keyword.operator"
    ],
    settings: {
      foreground: code.operators
    }
  }

  const preprocessor = {
    name: 'Preprocessor & directives',
    scope: [
      'punctuation.definition.directive',
      'keyword.control.directive',
      'entity.name.function.preprocessor',
      'entity.name.function.directive',
      'entity.name.label',
      "meta.tag.preprocessor"
    ],
    settings: {
      foreground: code.preprocessor,
    },
  }

  const functions = {
    name: 'Functions',
    scope: [
      'entity.name.function',
      'support.function',
      // xml tags
      'entity.name.tag',
    ],
    settings: {
      foreground: code.functions,
    },
  }

  const classes = {
    name: 'Classes & namespaces',
    scope: [
      'entity.name.type.class',
      'entity.name.type.namespace',
      'entity.other.inherited-class',
      'storage.type.namespace',
      'support.class',
      'support.other.namespace',
    ],
    settings: {
      foreground: code.classes,
    },
  }

  const types = {
    name: 'Types & type annotations',
    scope: [
      'storage.type',
      'entity.name.type',
      // PHP uses this in docblock type annotations
      'keyword.other.type',
      'support.type',
    ],
    settings: {
      foreground: code.types,
    },
  }

  const variables = {
    name: 'Variables',
    scope: [
      'variable',
    ],
    settings: {
      foreground: code.variables,
    },
  }

  const constants = {
    name: 'Constants',
    scope: [
      'constant'
    ],
    settings: {
      foreground: code.constants,
    },
  }

  const attributes = {
    name: 'Properties and attributes',
    scope: [
      'entity.other.attribute-name'
    ],
    settings: {
      foreground: code.properties
    }
  }

  const punctuation = {
    name: 'Punctuation',
    scope: [
      'punctuation',
      'meta.brace.angle',
      'meta.brace.round',
      'meta.brace.square',
      'meta.brace.curly',
      'meta.brackets',
    ],
    settings: {
      foreground: code.punctuation,
    },
  }

  const strings = {
    name: 'Strings',
    scope: [
      'string',
    ],
    settings: {
      foreground: code.strings,
    },
  }

  const escapes = {
    name: 'Escape sequences',
    scope: [
      'constant.character.escape',
    ],
    settings: {
      foreground: code.escapes,
    },
  }

  const regexps = {
    name: 'Regular expressions',
    scope: [
      'string.regexp',
      'string.regexp punctuation.definition',
    ],
    settings: {
      foreground: code.regexp.sequences,
    },
  }

  const regexpranges = {
    name: 'Regular expressions character classes',
    scope: [
      'string.regexp constant.other.character-class',
    ],
    settings: {
      foreground: code.regexp.ranges,
    },
  }

  const regexpsets = {
    name: 'Regular expressions character sets',
    scope: [
      'string.regexp constant.other.character-class.set',
    ],
    settings: {
      foreground: code.regexp.charsets,
    },
  }

  const headings = {
    name: 'Headings & sections',
    scope: [
      'entity.name.section',
      'punctuation.definition.heading',
    ],
    settings: {
      fontStyle: 'bold',
      foreground: code.headings,
    },
  }

  const docblocks = {
    name: 'Docblock Variables',
    scope: [
      'variable.other.jsdoc',
      'meta.other.type.phpdoc',
      'comment.block.javadoc variable.parameter',
    ],
    settings: {
      foreground: code.dockblockVariables,
    },
  }

  const links = {
    name: 'Links',
    scope: [
      'variable.other.link',
    ],
    settings: {
      foreground: code.links,
    },
  }

  return [
    primitives,
    comments,
    language,
    languageSecondary,
    languageConstants,
    languageVariables,
    operators,
    preprocessor,
    punctuation,
    classes,
    types,
    functions,
    variables,
    constants,
    attributes,
    strings,
    escapes,
    regexps,
    regexpranges,
    regexpsets,
    headings,
    docblocks,
    links,
  ]
}

export default common
