import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton, {CustomTextButton} from '../../../components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import {UserContext} from '../../../context/userContext';
import {
  User,
  UserContextType,
  UserLoginParams,
} from '../../../models/UserContext';
import {useApiStatus} from '../../../hooks/useApiStatus';
import {BeWellApi} from '../../../api/BeWellApi';
import {
  BoldText,
  ErrorText,
  LightText,
} from '../../../components/Customs/Texts';
import {log} from '../../../utils/logs';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const {storeUser} = useContext(UserContext) as UserContextType;

  const loginApi = useApiStatus({
    api: BeWellApi.auth.login,
    onSuccess({result}) {
      const userData = result.user;

      const user: User = {
        id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        verified: userData.verified,
        email: userData.email,
        token: result.token,
      };
      storeUser(user);
      AsyncStorage.setItem('userData', JSON.stringify(user));
    },
    onFail(error) {
      // console.log('error', error.message);
    },
  });

  const onSubmit = handleSubmit(data => {
    let userData: UserLoginParams = {
      email: data.email,
      password: data.password,
    };
    loginApi.fire(userData);
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
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Enter a valid email',
          },
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
          required: 'Enter a password',
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
        <ErrorText>{loginApi.errorMessage || ''}</ErrorText>
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
