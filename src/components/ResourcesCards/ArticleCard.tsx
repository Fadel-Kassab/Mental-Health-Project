import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const ArticleCard = ({article}: {article: any}) => {
  const navigation: any = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('article')}>
      <View style={style.mainContainer}>
        <View style={style.subView}>
          <View style={style.image}></View>
          <View style={style.timeBox}>
            <Text style={style.timeText}>{article.time_to_read}</Text>
            <Text style={style.minText}>{'mins'}</Text>
          </View>
        </View>
        <View style={style.infoContainer}>
          <Text style={style.articleName}>{article.title}</Text>
          <Text style={style.articleCategory}>{article.author}</Text>
          <View style={style.extraInfo}>
            <View style={style.ratingBox}>
              <Icon color="#5F6F52" name="star-half-full" size={14} />
              <Text style={style.ratingText}>{article.rating}</Text>
            </View>
            <View style={style.typeBox}>
              <Text style={style.typetext}>{article.type}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: 150,
    width: 210,
    marginTop: 10,
    marginBottom: 15,
    marginRight: 20,
  },
  subView: {
    backgroundColor: '#D9D9D9',
    position: 'relative',
    height: 110,
    width: 210,
    borderRadius: 10,
  },
  image: {},
  timeBox: {
    backgroundColor: '#ffffff',
    height: 22,
    width: 37,
    borderRadius: 3,
    position: 'absolute',
    bottom: -5,
    right: 12,
    zIndex: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    fontSize: 7,
    color: 'black',
    fontWeight: 'bold',
  },
  minText: {
    fontSize: 5,
  },
  infoContainer: {
    marginTop: 5,
    zIndex: -15,
  },
  articleName: {
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',
  },
  articleCategory: {
    fontSize: 8,
    color: 'gray',
    fontStyle: 'italic',
  },
  extraInfo: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  typetext: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#B99470',
  },
  ratingBox: {
    backgroundColor: '#E8E8E8',
    width: 30,
    height: 18,
    marginTop: 5,
    borderRadius: 3,
    fontSize: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  typeBox: {
    backgroundColor: 'rgba(185,148,112,0.3)',
    width: 40,
    height: 18,
    marginTop: 5,
    margin: 7,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ArticleCard;
