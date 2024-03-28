import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoryCard = ({children}: {children: string}) => {
  return (
    <View style={styles.category_card}>
      <View style={styles.category_card_icon} />
      <Text style={styles.category_card_text}>{children}</Text>
    </View>
  );
};

const CategoryList = () => {
  const data = [
    {
      text: 'ADHD',
    },
    {
      text: 'OCD',
    },
    {
      text: 'Daddies Issues',
    },
    {
      text: 'Mommies Issues',
    },
  ];

  return (
    <View style={styles.category_list}>
      {data.map(item => {
        return <CategoryCard>{item.text}</CategoryCard>;
      })}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  category_card: {
    backgroundColor: 'white',
    height: 83,
    width: 70,
    margin: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  category_list: {
    display: 'flex',
    flexDirection: 'row',

    gap: 20,
  },
  category_card_icon: {
    height: 50,
    width: 50,
    backgroundColor: 'grey',
  },
  category_card_text: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});
