import React from 'react';
import {Provider as ThemeProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import App from './src';
import {theme} from './src/core/theme';
import {store} from './store';

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Main;
