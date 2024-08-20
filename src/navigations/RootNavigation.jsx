import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Training from '../screens/Training';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Training" component={Training} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
