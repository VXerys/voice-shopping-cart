import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

// TODO: Import navigation atau main screen di sini
// import AppNavigator from './navigation/AppNavigator';
// import HomeScreen from './screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
