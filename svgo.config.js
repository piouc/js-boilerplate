let idCount = 0

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          moveGroupAttrsToElems: false,
          collapseGroups: false,
          minifyStyles: false
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
        prefix: () => `${idCount++}-`
      }
    }
  ],
}