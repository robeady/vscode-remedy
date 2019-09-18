'use strict'

module.exports = {
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: '${version}',
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    ['@semantic-release/exec', {
      prepareCmd: 'npx vsce package',
      publishCmd: 'npx vsce publish --pat $VSCE_TOKEN',
    }],
    '@semantic-release/git',
    ['@semantic-release/github', {
      // eslint-disable-next-line no-template-curly-in-string
      assets: [{ path: '*.vsix', label: 'remedy-${version}.vsix' }],
    }],
  ],
}
