import React from 'react';
import Entry from './src/navigation';
import axios from 'axios';



const App = () => {
  axios.defaults.baseURL = "http://10.0.2.2:3083/"

  return (
    <Entry />
  )
}

export default App;
