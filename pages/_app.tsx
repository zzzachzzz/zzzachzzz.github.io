import * as React from 'react';
import Script from 'next/script';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { font, codeFont } from '@/components/mixins';

export const theme = {
  bg: '#3e4d4f',
  prismPurple: '#ae81ff',
  prismBlue: '#66d9ef',
  prismGreen: '#a6e22e',
  prismRed: '#f92672',
};

type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    min-height: 100vh;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-device-width: 480px) {
      html { font-size: 14px; }
  }

  body {
    background-color: ${theme.bg};
    color: white;
    font-family: ${font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  code, code[class*="language-"] {
    font-family: ${codeFont};
  }
`;

const isProd = process.env.NODE_ENV === 'production';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {isProd && <GoogleAnalytics />}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-MPDH3GX2GP"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-MPDH3GX2GP');
      `}
    </Script>
  </>
);
