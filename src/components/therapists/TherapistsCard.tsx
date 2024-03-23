import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TherapistsCard = () => {
  return (
    <View style={styles.topdocs_card}>
      <View style={styles.inside_box} />
      <Text style={styles.therapist_name}>Dr. Food</Text>
      <Text style={styles.therapist_specialization}>
        Specialist screwing careers
      </Text>
    </View>
  );
};

export default TherapistsCard;

const styles = StyleSheet.create({
  topdocs_card: {
    backgroundColor: 'white',
    height: 200,
    width: 178,
    borderRadius: 8,
    marginRight: 10,
    textAlign: 'center',
  },
  inside_box: {
    backgroundColor: '#D9D9D9',
    height: 120,
    width: 178,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  therapist_name: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  therapist_specialization: {
    fontSize: 13,
    textAlign: 'center',
  },
});
