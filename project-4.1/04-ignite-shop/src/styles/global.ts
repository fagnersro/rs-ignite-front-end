import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  // A fonte não consegue ser aplicada ao ser estilizada por aqui, rever. 
  // 'body, input, textarea, button': {
  //   fontFamily: 'Roboto',
  //   fontWeight: 400,
  // }
})