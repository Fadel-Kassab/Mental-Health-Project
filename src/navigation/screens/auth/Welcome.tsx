import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import {BoldText, LightText} from '../../../components/Customs/Texts';

const Welcome = ({navigation}: {navigation: any}) => {
  return (
    <View style={style.main_container}>
      <View style={style.vector_container} />
      <BoldText>Welcome to WellBeing</BoldText>
      <LightText>Lorem ipsum dolor sit amet, consectetur</LightText>
      <View style={style.auth_options}>
        <View style={style.seperator} />
        <LightText>Connect with:</LightText>
        <CustomButton
          onPress={() => navigation.navigate('signin')}
          label="Email"
        />

        <CustomButton
          labelStyle={style.outline_button_label}
          buttonStyle={style.outline_button}
          label="Google"
        />
      </View>
    </View>
  );
};

export default Welcome;

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vector_container: {
    width: 250,
    height: 250,
    backgroundColor: 'grey',
  },

  auth_options: {
    display: 'flex',
    gap: 20,
    width: '100%',
    alignItems: 'center',
  },
  seperator: {
    height: 100,
  },
  outline_button: {
    backgroundColor: 'white',
  },
  outline_button_label: {
    color: '#5F6F52',
  },
});
