const fonts = require('./theme/fonts')
const spacings = require('./theme/spacings')
const strokes = require('./theme/strokes')
const transitions = require('./theme/transitions')
const colors = require('./theme/colors')
const screens = require('./theme/screens')

module.exports = {
  darkMode: 'class',
  theme: {
    colors,
    screens,
    gradientColorStops: () => ({
      ...colors
    }),
    extend: {
      ...fonts,
      ...spacings,
      ...strokes,
      ...transitions,
      cursor: {
        help: 'help'
      },
      inset: {
        safefull: 'calc(100% - 5px)',
        safe0: 'calc(0% - 5px)'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
    extend: {
      margin: ['first'],
      width: ['group-hover']
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('./plugins/button/button-size'),
    require('./plugins/button/button-color'),
    require('./plugins/button/button-color-outline'),
    require('./plugins/button/button-color-gradient'),
    require('./plugins/hexagon/hexagon-size'),
    require('./plugins/hexagon/hexagon-color'),
    require('./plugins/hexagon/hexagon-color-outline'),
    require('./plugins/hexagon/hexagon-color-gradient'),
    require('./plugins/icon/icon-size'),
    require('./plugins/icon/icon-button-size'),
    require('./plugins/transition/stars'),
    require('./plugins/transition/underline')
  ]
}
