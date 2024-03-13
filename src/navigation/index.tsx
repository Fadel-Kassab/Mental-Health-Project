import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Journaling from './screens/Journaling';

const Entry = () => {

  const Stack = createNativeStackNavigator();
  let isAuth = false

  return (
    <NavigationContainer>
      {!isAuth ? <Stack.Navigator>
        <Stack.Screen name="sigin" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Journaling" component={Journaling} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default Entry