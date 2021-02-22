import { cs as csscope } from '@remedy/tools/tmscopes'

function csharp({ code }) {
  const classes = {
    scope: csscope([
      'entity.name.type.namespace',
    ]),
    settings: {
      foreground: code.classes,
    },
  }

  return [
    classes,
  ]
}

export default csharp
