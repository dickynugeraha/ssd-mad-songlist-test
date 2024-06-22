import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView>
      <RootNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
