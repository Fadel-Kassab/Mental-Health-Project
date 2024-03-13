import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton, { CustomTextButton } from '../../components/CustomButton';


const Login = ({ navigation, route }: { navigation: any, route: any }) => {


  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>

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
      <CustomButton
        label='Login'
      />
      <View style={style.auth_navigation}>
        <Text>Don't have an account yet? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate("signup")}
          label='Create One' />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 30
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

export default Login;