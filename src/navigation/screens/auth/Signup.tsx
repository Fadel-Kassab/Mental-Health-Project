import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { UserContext } from '../../../context/userContext';
import { UserContextType, UserSignupParams } from '../../../models/UserContext'; 
import CustomTextButton from '../../../components/CustomTextButton';

const Signup = ({ navigation, route }: { navigation: any; route: any }) => {
  const { control, formState, handleSubmit } = useForm<UserSignupParams>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  //Context Provider
  const { signUp } = useContext(UserContext) as UserContextType;

  const onSubmit = handleSubmit(data => {
    signUp(data);
  });

  return (
    <View className="bg-primary flex-1 items-center px-3 pt-20">
      <Text className='font-medium text-3xl mb-5'>Signup</Text>

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
              secureTextEntry
              placeholder="Password"
              containerClassName='mb-2'
            />
          );
        }}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => {
          return (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry
              placeholder="Re-enter your password"
              containerClassName='mb-5'
            />
          );
        }}
      />

      <CustomButton onPress={onSubmit} label="Sign Up" />

      <View className='flex-row mt-3'>
        <Text>Already have an account? </Text>
        <CustomTextButton
          onPress={() => navigation.navigate('sigin')}
          label="Sign in"
        />
      </View>

    </View>
  );
};

export default Signup;
