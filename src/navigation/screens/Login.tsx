import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Login = ({ navigation, route }) => {

  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <Text>Enter your personal email.</Text>
      <CustomTextInput
        value={userName}
        onChangeText={setUserName}
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton
        label='Login'
        onPress={() => navigation.navigate("signup")}
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
    backgroundColor: "#FEFAE0",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 150
  }
})

export default Login;