/**
 * I am a color palette.
 */
const colors = {
  black: '#191919',
  grayDark: '#888888',
  white: '#ffffff',
  yellow: '#fbc74f',
  yellowDark: '#c59017'
};


/**
 * I am a fonts list.
 */
const fonts = {
  bold: 500,
  bolder: 700,
  medium: 400,
  primary: '"Red Hat Display", Roboto, sans-serif'
};


/**
 * I am a application theme.
 */
const theme = {
  background: '#c3bdad',
  gradient: `linear-gradient(to right, ${colors.yellow}, ${colors.yellowDark})`,
  fonts: { ...fonts },
  primary: colors.yellow,
  primaryDark: colors.yellowDark
};


/**
 * EXPORTS
 */
export default theme;
