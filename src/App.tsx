import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

// TODO: Import navigation atau main screen di sini
// import AppNavigator from './navigation/AppNavigator';
// import HomeScreen from './screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      {/* TODO: Ganti dengan navigation atau screen utama Anda */}
      {/* <AppNavigator /> */}
    </SafeAreaProvider>
  );
};

export default App;
