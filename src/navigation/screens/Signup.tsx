import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton, { CustomTextButton } from '../../components/CustomButton';


const Signup = ({ navigation, route }: { navigation: any, route: any }) => {

  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

  return (
    <View style={style.container}>
      <Text style={style.title}>Signup</Text>
      <CustomTextInput
        value={userName}
        onChangeText={setUserName}
        placeholder='Email'
      />
      <CustomTextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder='Password'
      />
      <CustomTextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry
        placeholder='Re-enter your password'
      />
      <CustomButton
        label='Sign Up'
      /><View style={style.auth_navigation}>
        <Text>Already have an account? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate("login")}
          label='Sign in' />
      </View>
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
  },
  auth_navigation: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row"
  }
})

export default Signup;