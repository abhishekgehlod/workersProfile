import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WellcomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, color: '#000'}}>Wellcome</Text>
    </View>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({});
