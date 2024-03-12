import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Signup = () => {

  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

  return (
    <View style={style.container}>
      <Text style={style.title}>Signup</Text>
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
     <CustomTextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry
      />
      <CustomButton
        label='Sign Up'
        onPress={() => console.log("Navigation next")}
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

export default Signup;