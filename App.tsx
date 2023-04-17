import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/screens/Home';


const CounterApp = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
};


export default CounterApp;

