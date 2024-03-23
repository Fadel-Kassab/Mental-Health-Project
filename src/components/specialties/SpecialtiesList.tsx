import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SpecialtiesList = () => {
  return (
    <View>
      <View style={styles.specialist_list}>
        <View style={styles.specialist_card} />
        <View style={styles.specialist_card} />
        <View style={styles.specialist_card} />
      </View>
    </View>
  );
};

export default SpecialtiesList;

const styles = StyleSheet.create({
  specialist_card: {
    backgroundColor: '#D9D9D9',
    height: 173,
    width: 120,
    borderRadius: 8,
  },
  specialist_list: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
