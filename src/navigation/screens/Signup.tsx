import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton, { CustomTextButton } from '../../components/CustomButton';
import { Controller, Form, SubmitHandler, useForm } from 'react-hook-form';
import { register } from '../../../api/users';
import axios from 'axios';

type FormData = {
  email: string
  password: string
  passwordConfirmation: string
}

const Signup = ({ navigation, route }: { navigation: any, route: any }) => {

  const { control, formState, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    }
  })

  const onSubmit = handleSubmit((data) => {
    register(data)
  })

  return (
    <View style={style.container}>
      <Text style={style.title}>Signup</Text>
      {/* <View style={style.name_input}>
        <CustomTextInput />
        <CustomTextInput />
      </View> */}
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value } }) => {
          return <CustomTextInput
            value={value}
            onChangeText={onChange}
            placeholder='Email'
          />
        }}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, value } }) => {
          return <CustomTextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry
            placeholder='Password'
          />
        }}
      />
      <Controller
        control={control}
        name='passwordConfirmation'
        render={({ field: { onChange, value } }) => {
          return <CustomTextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry
            placeholder='Re-enter your password'
          />
        }}
      />
      <CustomButton
        onPress={onSubmit}
        label='Sign Up'
      />

      <View style={style.auth_navigation}>
        <Text>Already have an account? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate("sigin")}
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
  },

})

export default Signup;