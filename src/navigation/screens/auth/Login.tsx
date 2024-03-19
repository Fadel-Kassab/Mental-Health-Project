import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton, { CustomTextButton } from '../../../components/CustomButton';
import { useForm, Controller } from 'react-hook-form';
import { UserContext } from '../../../context/userContext';
import { UserContextType, UserLoginParams } from '../../../models/UserContext';
import { useApiStatus } from '../../../hooks/useApiStatus';
import { BeWellApi } from '../../../api/BeWellApi';

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Login = ({ navigation, route }: { navigation: any; route: any }) => {

  const { control, formState, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  //Context Provider
  const { signIn } = useContext(UserContext) as UserContextType;

  const loginApi = useApiStatus({
    api: BeWellApi.auth.login,
    onSuccess({ result }) {
      console.log(result)
    },
  })

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
      <Text style={style.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
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

      <CustomButton onPress={onSubmit} label="Login" />

      <View style={style.auth_navigation}>
        <Text>Don't have an account yet? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate('signup')}
          label="Create One"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 30,
  },
  container: {
    backgroundColor: '#FEFAE0',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 150,
  },
  auth_navigation: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Login;
