import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

const Entry = () => {
  const Stack = createNativeStackNavigator();
  let isAuth = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#F5F5F5',
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signin"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* :
  <Stack.Navigator>
    <Stack.Screen name="Journaling" component={Journaling} />
  </Stack.Navigator>} */}
    </NavigationContainer>
  );
};

export default Entry;
