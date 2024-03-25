import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Controller, useForm} from 'react-hook-form';
import CustomTextInput from '../../../components/CustomTextInput';
import {BoldText} from '../../../components/Customs/Texts';
import CustomButton from '../../../components/CustomButton';
import {useApiStatus} from '../../../hooks/useApiStatus';
import {BeWellApi} from '../../../api/BeWellApi';
import {log} from '../../../utils/logs';
import {
  User,
  UserContextType,
  UserVerificationParams,
} from '../../../models/UserContext';
import {UserContext} from '../../../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Verfification = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      code: '',
    },
  });

  const {user, verifyUser} = useContext(UserContext) as UserContextType;

  const loginApi = useApiStatus({
    api: BeWellApi.auth.verfiy,
    onSuccess({result}) {
      verifyUser(result);

      const userData: User = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        verified: result === 'verified' ? true : false,
        email: user.email,
        token: user.token,
      };

      AsyncStorage.setItem('userData', JSON.stringify(userData));
    },
    onFail(error) {
      log.error(error);
    },
  });

  const onSubmit = handleSubmit(data => {
    let userData: UserVerificationParams = {
      id: user.id,
      code: data.code,
    };

    loginApi.fire(userData);
  });
  return (
    <View style={styles.mainContainer}>
      <BoldText>Verification</BoldText>
      <Controller
        name="code"
        control={control}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <CustomTextInput
              placeholder="Enter code"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <CustomButton onPress={onSubmit} label="Verify" />
    </View>
  );
};

export default Verfification;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 40,
    flex: 1,

    alignItems: 'center',
  },
});
