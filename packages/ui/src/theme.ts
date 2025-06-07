// Correct import for v2+
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// First define your config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Then extend the theme
export const theme = extendTheme({ 
  config,
  colors: {
    brand: {
      500: '#8257E6',
    },
  },
  // other theme overrides...
});

export * from '@chakra-ui/react';