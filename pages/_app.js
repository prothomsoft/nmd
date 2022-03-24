import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css'

export const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState('light');
  const toggleColorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1188,
            xl: 1536
          }
        },
        components: {
          MuiMenuItem: {
            variants : [
              {props: {variant: 'menuButtons'},
              style: {
                fontFamily: 'Oswald',
                  fontSize: 22,
                  color: 'white',
                  backgroundColor: 'transparent',
                  marginLeft:10,
                  marginRight:10
              }}
            ]
          },
          MuiButton: {
            variants: [
              { props: {variant: 'menuButton'},
                style: {
                  fontFamily: 'Oswald',
                  fontSize: 17,
                  color: 'white'
                }
              }
            ],
            defaultProps: {
              disableElevation: true,
              disableFocusRipple: true,
              disableRipple: true
            }
          }
        },
        palette: {
          mode: 'dark'
        },
      }),
    [mode]    
  );

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};