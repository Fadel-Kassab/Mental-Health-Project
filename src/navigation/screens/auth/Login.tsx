import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { useForm, Controller } from 'react-hook-form';
import { UserContext } from '../../../context/userContext';
import { UserContextType, UserLoginParams } from '../../../models/UserContext';
import { useApiStatus } from '../../../hooks/useApiStatus';
import { BeWellApi } from '../../../api/BeWellApi';
import CustomTextButton from '../../../components/CustomTextButton';


const Login = ({ navigation, route }: { navigation: any; route: any }) => {

  const { control, formState, handleSubmit } = useForm<UserLoginParams>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  //Context Provider
  const { storeUser, signIn } = useContext(UserContext) as UserContextType;

  const loginApi = useApiStatus({
    api: BeWellApi.auth.login,
    onSuccess({ result }) {
      console.log(result)
    },
  })

  const onSubmit = handleSubmit(userData => {
    //loginApi.fire(userData);
    signIn(userData);
  });

  return (
    <View className="bg-primary flex-1 items-center px-3 pt-20">
      <Text className='font-medium text-3xl mb-5'>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email"
              containerClassName='mb-2'
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
              placeholder="Password"
              containerClassName='mb-5'
              secureTextEntry
            />
          );
        }}
      />

      <CustomButton
        onPress={onSubmit}
        label="Login"
        isLoading={false}
      />

      <View className='flex-row mt-3'>
        <Text>Don't have an account yet? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate('signup')}
          label="Create One"
        />
      </View>

    </View>
  );
};

export default Login;
