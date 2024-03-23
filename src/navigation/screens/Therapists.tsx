import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import SpecialtiesList from '../../components/specialties/SpecialtiesList';
import TherapistsList from '../../components/therapists/TherapistsList';
function Header({children}: {children: string}) {
  return (
    <View style={style.header_container}>
      <Text style={style.header_text}>{children}</Text>
      <Text style={style.header_sec_text}>View All</Text>
    </View>
  );
}
function Therapists() {
  return (
    <View style={style.main_container}>
      <Text style={style.header}>Therapists</Text>
      <View style={{height: 30}} />
      <TextInput placeholder="Search" style={style.input_style} />
      <Header>Specialist Therapist</Header>
      <View style={{height: 10}} />
      <SpecialtiesList />
      <Header>Top Therapists</Header>
      <View style={{height: 10}} />
      <TherapistsList />
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
  input_style: {
    backgroundColor: '#E3E3E3',
    borderRadius: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  list_header: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E3E3E3',
  },
  header_text: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  header_sec_text: {
    fontSize: 13,
    color: '#A9B388',
    fontWeight: '600',
  },

  header_container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default Therapists;
