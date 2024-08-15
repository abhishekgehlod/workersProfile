import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <View
      style={{flex: 1, width: '100%', height: 150, backgroundColor: '#fff'}}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
        <View style={styles.slide1}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://www.shutterstock.com/image-vector/sexy-secretary-busy-paperwork-elegant-260nw-1101564203.jpg',
            }}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/female-astrologer-doing-tarot-card-reading-9300135-7703831.png?f=webp',
            }}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://img.freepik.com/free-vector/young-photographer-team-use-camera-lighting-flash-tripod-studio-taking-photo_1150-48748.jpg',
            }}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
