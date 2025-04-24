import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace`,  }

export const breakpoints = {
  mobile: '450px',
  sm: '640px',
  md: '800px',
  lg: '1024px',
  xl: '1280px'
}

export const theme = extendTheme({
  styles: {
    global: {
      'html': { overflowX: 'hidden' },
      'body': {
        background: '#222',
        backgroundImage: '/assets/body-bg.png',
        backgroundRepeat: 'repeat-x',
        fontSize: '14px'
      }
    }
  },
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
    sitePink: '#f353b0',
    sitePinkHover: '#b46388'
  },
  fonts,
  breakpoints
})

export default theme
