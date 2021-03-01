import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from 'theme';
import App from 'app';
import store from './store';
import { QueryClientProvider } from 'react-query';
import queryClient from 'queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
