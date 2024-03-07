import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {

  const [ userName, setUserName ] = useState<string>()
  const [ password, setPassword ] = useState<string>()

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput
        style={style.input}
        value={userName}
        onChangeText={setUserName}
        autoComplete='email'
      />
      <TextInput
        style={style.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 10
  },
  container: {
    marginTop: 20,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    width: "70%",
    height: 50,
    padding: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
  }
})

export default App;
