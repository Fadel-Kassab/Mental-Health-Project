import React from 'react';
import Entry from './navigation';
import UserProvider from './context/userContext';

const App = () => {
  return (
    <UserProvider>
      <Entry />
    </UserProvider>
  );
};

export default App;
