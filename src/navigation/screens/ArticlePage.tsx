import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const ArticlePage = () => {
  return (
    <View style={style.main_container}>
      {/* <Image/> */}
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
        start={{x: 0.5, y: 0.5}}
        end={{x: 0.5, y: 1}}
        style={{height: '100%', width: '100%'}}>
        <Text style={style.title}>lorem ipsum dolore</Text>
      </LinearGradient>
    </View>
  );
};
const style = StyleSheet.create({
  main_container: {
    maxHeight: (width * 9) / 16,
    width: '100%',
    backgroundColor: '#dddddd',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    color: 'white',
    bottom: 15,
    left: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ArticlePage;
