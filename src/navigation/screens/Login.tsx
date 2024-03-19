import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton, {CustomTextButton} from '../../components/CustomButton';
import {useForm, Controller, Form} from 'react-hook-form';
import {login} from '../../../api/users';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BoldText, ErrorText, LightText} from '../../components/Customs/Texts';

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Login = ({navigation, route}: {navigation: any; route: any}) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit(data => {
    login(data);
  });

  return (
    <View style={style.container}>
      <BoldText>Login</BoldText>
      <LightText>
        Welcome back, Log in to your account so you can benefit from our
        services.
      </LightText>
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

      <View style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
        <CustomButton onPress={onSubmit} label="Login" />
        <View style={style.auth_navigation}>
          <Text>Don't have an account yet? </Text>
          <CustomTextButton
            onPress={() => navigation.navigate('signup')}
            label="Create One"
          />
        </View>
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

export default Login;
