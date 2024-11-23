const { createHash } = require('crypto');

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          moveGroupAttrsToElems: false,
          collapseGroups: false,
          minifyStyles: false,
          mergePaths: false,
          cleanupIds: false,
          convertTransform: false
        },
      },
    },
    {
      name: 'convertStyleToAttrs'
    },
    {
      name: 'prefixIds',
      params: {
        delim: '',
        prefix: (node, info) => {
          const hash = createHash('sha1')
          hash.update(info.path)
          return `${hash.digest('hex')}-`
        }
      }
    }
  ],
}