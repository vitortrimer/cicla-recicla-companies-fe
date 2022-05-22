import React from 'react';
import ReactDOM from 'react-dom/client';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { GlobalStyles } from './styles/GlobalStyles';
import Routes from './routes';

const colors = {
  brand: {
    900: 'purple',
    800: 'purple',
    700: 'purple',
  },
}
const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
      <GlobalStyles />
    </React.Fragment>
  </React.StrictMode>
);
