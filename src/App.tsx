import React from 'react';
import Entry from './navigation';
import UserProvider from './context/userContext';
import { RealmProvider } from '@realm/react';

const App = () => {
  return (
    <RealmProvider>
      <UserProvider>
        <Entry />
      </UserProvider>
    </RealmProvider>
  );
};

export default App;
