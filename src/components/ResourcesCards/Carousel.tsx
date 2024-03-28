import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import ICarousel from 'react-native-snap-carousel';

const trial = [
  {
    text: 'text1',
  },
  {
    text: 'text2',
  },
];

const Carousel = () => {
  const width = Dimensions.get('window').width;

  const _renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={styles.imageContainer} key={index}>
        <Text>{item.text}</Text>
      </View>
    );
  };
  return (
    <ICarousel
      data={trial}
      renderItem={_renderItem}
      sliderWidth={width - 30}
      itemWidth={width - 30}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    height: 150,
    width: '100%',
    borderRadius: 15,
    marginTop: 120,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#D9D9D9',
  },
});
export default Carousel;
