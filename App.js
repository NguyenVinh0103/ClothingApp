import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './src/navigation/RootNavigation';
import { Store } from './src/redux';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
