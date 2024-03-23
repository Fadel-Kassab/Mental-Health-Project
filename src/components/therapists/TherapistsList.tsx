import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TherapistsCard from './TherapistsCard';

const TherapistsList = () => {
  return (
    <ScrollView
      style={styles.therapistsList}
      pagingEnabled={true}
      horizontal={true}>
      <TherapistsCard />
      <TherapistsCard />
      <TherapistsCard />
      <TherapistsCard />
      <TherapistsCard />
      <TherapistsCard />
    </ScrollView>
  );
};

export default TherapistsList;

const styles = StyleSheet.create({
  therapistsList: {
    paddingBottom: 10,
  },
});
