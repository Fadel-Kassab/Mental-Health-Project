import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Communities = () => {
  return (
    <View style={style.main_container}>
      <Text style={style.header}>Communities</Text>
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

export default Communities;
