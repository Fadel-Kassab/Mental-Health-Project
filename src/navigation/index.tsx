import {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import {UserContext} from '../context/userContext';
import {User, UserContextType} from '../models/UserContext';
import Journaling from './screens/Journaling';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Therapists from './screens/Therapists';
import Resources from './screens/Resources';
import Communities from './screens/Communities';
import Profile from './screens/Profile';
import Welcome from './screens/auth/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import Verfification from './screens/auth/Verfification';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Resources" component={Resources} />
      <BottomTab.Screen name="Journaling" component={Journaling} />
      <BottomTab.Screen name="Therapists" component={Therapists} />
      <BottomTab.Screen name="Communities" component={Communities} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

const Entry = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  //context
  const {storeUser} = useContext(UserContext) as UserContextType;

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    AsyncStorage.getItem('userData').then(res => {
      if (res !== null) {
        let user: User = JSON.parse(res);
        storeUser(user);
      }
      setLoading(false);
    });
  }, []);

  const {user} = useContext(UserContext) as UserContextType;

  if (loading) {
    return <View />;
  } else if (user.token === '') {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#F5F5F5',
            },
          }}>
          <Stack.Screen
            name="welcome"
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
      </NavigationContainer>
    );
  } else if (user.token && !user.verified) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="verification"
            component={Verfification}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (user.verified) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
};

export default Entry;
