import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import ArticleCard from '../../components/ResourcesCards/ArticleCard';
import Carousel from '../../components/ResourcesCards/Carousel';
import CategoryList from '../../components/ResourcesCards/CatgeoryList';
import ArticleList from '../../components/ResourcesCards/ArticleList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Resources = () => {
  return (
    <View style={style.main_container}>
      <Text style={style.header}>Resources</Text>
      <View style={style.seperator}></View>
      <Carousel />
      <View style={style.seperator}></View>
      <CategoryList />
      <View style={{height: 10}} />
      <CategoryList />

      <View style={style.seperator}></View>
      <View style={style.forYou}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={style.justForYou}>Just for you</Text>
            <Icon color="#B99470" name="star-four-points" size={14} />
          </View>
          <Text style={style.justForYou_b}>view all</Text>
        </View>
        <Text style={style.forYouText2}>
          A collection of articles and videos that match your personal intrest.
        </Text>
      </View>
      <ArticleList />
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
  seperator: {
    height: 25,
    marginTop: 12,
    width: '100%',
  },
  forYou: {},
  justForYou: {
    fontSize: 15,
    color: 'black',
    marginTop: 2,
    fontWeight: 'bold',
  },
  forYouText2: {
    fontSize: 11,
    color: 'gray',
  },
  justForYou_b: {
    fontSize: 10,
    color: '#A9B388',
    fontWeight: 'bold',
  },
});

export default Resources;
