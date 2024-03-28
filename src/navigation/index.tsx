import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import {UserContext} from '../context/userContext';
import {UserContextType} from '../models/UserContext';
import Journaling from './screens/Journaling';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Therapists from './screens/Therapists';
import Resources from './screens/Resources';
import Communities from './screens/Communities';
import Profile from './screens/Profile';
import ArticlePage from './screens/ArticlePage';
// import Journaling from './screens/Journaling';

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
  const Stack = createNativeStackNavigator();

  const {user} = useContext(UserContext) as UserContextType;

  return (
    <NavigationContainer>
      {!user.token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="sigin"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component={TabNavigator} />
          <Stack.Screen name="article" component={ArticlePage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Entry;
