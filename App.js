import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from '@src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Dashboard from '@src/dashboard/container';

const App = () => {

  useEffect(() => {
    StatusBar.setBackgroundColor('black');
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
