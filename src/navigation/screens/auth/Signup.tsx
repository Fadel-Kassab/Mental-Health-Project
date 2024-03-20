import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton, {CustomTextButton} from '../../../components/CustomButton';
import {Controller, useForm} from 'react-hook-form';
import {
  BoldText,
  ErrorText,
  LightText,
} from '../../../components/Customs/Texts';
import {UserContext} from '../../../context/userContext';
import {UserContextType, UserSignupParams} from '../../../models/UserContext';
import {useApiStatus} from '../../../hooks/useApiStatus';
import {BeWellApi} from '../../../api/BeWellApi';
import {log} from '../../../utils/logs';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
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
      confirmPassword: '',
    },
  });

  //Context Provider

  const signupApi = useApiStatus({
    api: BeWellApi.auth.register,
    onSuccess({result}) {},
    onFail(error) {
      log.error(error);
    },
  });

  const onSubmit = handleSubmit(data => {
    let userData: UserSignupParams = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    signupApi.fire(userData);
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
        rules={{
          required: true,
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>?]).{8,}$/,
            message:
              'Password must contain at least 8 characters.\nPassword must contain at least one uppercase letter.\nPassword must contain one lowercase letter.\nPassword must contain one number, and one special character',
          },
        }}
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
      <ErrorText> </ErrorText>
      <Controller
        rules={{
          required: 'Passwords do not match',
          validate: value =>
            value === getValues('password') || 'Passwords do not match',
        }}
        control={control}
        name="confirmPassword"
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

      <ErrorText>{errors.confirmPassword?.message || ''}</ErrorText>
      <ErrorText>{errors.password?.message || '\n\n\n'}</ErrorText>
      <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
        <CustomButton onPress={onSubmit} label="SignUp" />
        <View style={style.auth_navigation}>
          <Text>Already have an account? </Text>
          <CustomTextButton
            onPress={() => navigation.navigate('signin')}
            label="Sign in"
          />
        </View>
        <ErrorText>{signupApi.errorMessage || ''}</ErrorText>
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
