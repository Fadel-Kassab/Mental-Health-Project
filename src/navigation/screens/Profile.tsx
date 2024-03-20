import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import CustomButton from '../../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../context/userContext';
import {User, UserContextType} from '../../models/UserContext';

const Profile = () => {
  const {storeUser} = useContext(UserContext) as UserContextType;

  return (
    <View style={style.main_container}>
      <Text style={style.header}>Profile</Text>
      <CustomButton
        onPress={() => {
          AsyncStorage.removeItem('userData');
          const model: User = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            token: '',
            verified: false,
          };
          storeUser(model);
        }}
        label="Sign Out"
      />
    </View>
  );
};

const style = StyleSheet.create({
  main_container: {
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Profile;
