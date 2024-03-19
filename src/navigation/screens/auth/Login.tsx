import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton, {CustomTextButton} from '../../../components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import {UserContext} from '../../../context/userContext';
import {UserContextType, UserLoginParams} from '../../../models/UserContext';
import {useApiStatus} from '../../../hooks/useApiStatus';
import {BeWellApi} from '../../../api/BeWellApi';
import {
  BoldText,
  ErrorText,
  LightText,
} from '../../../components/Customs/Texts';

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

  //Context Provider
  const {signIn} = useContext(UserContext) as UserContextType;

  const loginApi = useApiStatus({
    api: BeWellApi.auth.login,
    onSuccess({result}) {
      console.log(result);
    },
  });

  const onSubmit = handleSubmit(data => {
    let userData: UserLoginParams = {
      email: data.email,
      password: data.password,
    };
    //loginApi.fire(userData);
    signIn(userData);
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
