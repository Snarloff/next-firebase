import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig  = {  
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ 
  config,
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    xBold: 900,
  }
})

export default theme