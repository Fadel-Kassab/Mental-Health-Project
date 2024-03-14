import React, {useContext} from 'react';
import Entry from './src/navigation';
import axios from 'axios';
import UserProvider, {UserContext} from './src/context/userContext';
import {UserContextType} from './src/types/User';

const App = () => {
  axios.defaults.baseURL = 'http://10.0.2.2:3083/';

  return (
    <UserProvider>
      <Entry />
    </UserProvider>
  );
};

export default App;
