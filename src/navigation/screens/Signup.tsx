import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton, {CustomTextButton} from '../../components/CustomButton';
import {Controller, Form, SubmitHandler, useForm} from 'react-hook-form';
import {register} from '../../../api/users';
import {BoldText, ErrorText, LightText} from '../../components/Customs/Texts';
import axios from 'axios';

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup = ({navigation, route}: {navigation: any; route: any}) => {
  const {
    control,
    formState: {errors},
    getValues,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    register(data);
  });

  return (
    <View style={style.container}>
      <BoldText>SignUp</BoldText>
      <LightText>Welcome to Be well, creat your account.</LightText>
      <View style={style.seperator} />
      <Controller
        rules={{
          required: 'Email is required',
        }}
        control={control}
        name="email"
        render={({field: {onChange, value}}) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email"
            />
          );
        }}
      />
      <ErrorText>{errors.email?.message || ''}</ErrorText>

      <Controller
        rules={{required: 'Password is required'}}
        control={control}
        name="password"
        render={({field: {onChange, value}}) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry
              placeholder="Password"
            />
          );
        }}
      />
      <ErrorText>{errors.password?.message || ''}</ErrorText>
      <Controller
        rules={{
          required: 'Passwords do not match',
          validate: value =>
            value === getValues('password') || 'Passwords do not match',
        }}
        control={control}
        name="passwordConfirmation"
        render={({field: {onChange, value}}) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry
              placeholder="Re-enter your password"
            />
          );
        }}
      />
      <ErrorText>{errors.passwordConfirmation?.message || ''}</ErrorText>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
        <CustomButton onPress={onSubmit} label="SignUp" />
        <View style={style.auth_navigation}>
          <Text>Already have an account? </Text>
          <CustomTextButton
            onPress={() => navigation.navigate('signin')}
            label="Sign in"
          />
        </View>
        <ErrorText>randomerror</ErrorText>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  seperator: {
    height: 50,
  },
  auth_navigation: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Signup;
