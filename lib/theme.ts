import { extendTheme } from '@chakra-ui/react';

const colors = {
  _blue: {
    main: 'rgba(16, 24, 40, 1)',
    bg: '#fff',
    text: '#667085',
    borderColor: '#D0D5DD',
  },
};

const fonts = {
  heading: 'PolySans, -apple-system, system-ui, sans-serif',
  body: 'Inter, -apple-system, system-ui, sans-serif',
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const radii = {
  md: '8px',
};

const sizes = {
  custom: {
    heightInput: '44px',
    widthInput: '360px',
  },
};

const theme = {
  sizes,
  radii,
  colors,
  fonts,
  space: {
    vGutter: '6.25rem',
  },
  shadows: {
    highlight: 'inset 0 2px 0 0 rgb(255 255 255 / 5%)',
  },
  styles: {
    global: {
      'html, body': {
        bg: '_blue.bg',
        color: '_blue.main',
        minH: '100vh',
        overflowX: 'hidden',
        // colorScheme: 'light',
      },
      input: {
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
  },
};

export default extendTheme(theme);
