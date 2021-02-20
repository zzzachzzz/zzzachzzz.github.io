import * as React from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

export const theme = {
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
    background-color: #3e4d4f;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {process.env.NODE_ENV === 'production' ? (
          <GAListener>
            <Component {...pageProps} />
          </GAListener>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  );
}

const GAListener = ({ children }: { children: JSX.Element; }) => {
  const router = useRouter();
  const isGAInit = React.useRef(false);

  React.useEffect(() => {
    if (!isGAInit.current) {
      isGAInit.current = true;
      ReactGA.initialize('UA-146825130-1');
    }
    sendPageView(router.asPath);
  }, [router.asPath]);

  function sendPageView(path: string) {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  }

  return children;
};

