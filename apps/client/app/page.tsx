// apps/web/pages/_app.tsx
import { ChakraProvider } from '@repo/ui';
import { theme } from '@repo/ui/theme'; // Import from the specific theme path

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;