import React from 'react';
import Entry from './navigation';
import UserProvider from './context/userContext';
import {LogBox} from 'react-native';
import {logger} from 'react-native-logs';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <UserProvider>
      <Entry />
    </UserProvider>
  );
};

export default App;
