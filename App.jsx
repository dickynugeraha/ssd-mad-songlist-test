import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {Provider} from 'react-redux';
import store from './src/redux';

function App() {
  return (
    <AlertNotificationRoot>
      <GestureHandlerRootView>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </GestureHandlerRootView>
    </AlertNotificationRoot>
  );
}

export default App;
