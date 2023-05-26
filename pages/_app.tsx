import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import theme from '@/lib/theme';
import fontFace from '@/lib/fontface';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps | any) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Global styles={fontFace} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
