import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Therapists() {
  return (
    <View style={style.main_container}>
      <Text style={style.header}>Therapists</Text>
    </View>
  );
}

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

export default Therapists;
