import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";

export const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState("light");
  const toggleColorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          h1 : {
            fontSize: "1.5rem"
          },
          h2 : {
            fontSize: "1.5rem"
          },
          h3 : {
            fontSize: "3.75rem",
            padding: "10px"
          },
          h4: {
            fontSize: "3rem",
            padding: "10px"
          },
          body1 : {
            fontSize: "1rem"
          },
          subtitle1 : {
            fontSize: "1.5rem"
          },
          subtitle2 : {
            fontSize: "1.2rem"
          },
          fontFamily: [
            'Oswald'
          ].join(','),
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1188,
            xl: 1536,
          },
        },
        components: {
          MuiMenuItem: {
            variants: [
              {
                props: { variant: "menuButtons" },
                style: {                  
                  fontSize: 22,
                  color: "white",
                  backgroundColor: "transparent",
                  marginLeft: 10,
                  marginRight: 10,
                },
              },
            ],
          },
          MuiButton: {
            variants: [
              {
                props: { variant: "menuButton" },
                style: {                  
                  fontSize: 17,
                  color: "white"
                },
              },
              {
                props: { variant: "siteButton" },
                style: {                  
                  fontSize: 17,
                  color: "white",
                  border: "2px solid #FFF",
                  padding: "11px 61px 11px 61px"
                },
              }
            ]
          },
        },
        palette: {
          mode: "dark",
          primary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#FFFFFF",
            contrastText: "#FFFFFF"
          },
        },
      }),
    [mode]
  );

  const getLayout = Component.getLayout || ((page) => page);

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
