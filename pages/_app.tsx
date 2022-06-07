import type { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { Fragment } from 'react'
import Head from 'next/head'
import theme from 'styles/theme'

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalStyle = ({ children }: LayoutProps) => (
  <Fragment>
    <Head>
      <meta content="width=device-with, initial-scale=1" name="viewport" />
    </Head>

    <CSSReset/>

    <Global styles={css`
      html {
        scroll-behavior: smooth;
      }

      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

    `} />

    {children}

  </Fragment>
  
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
