import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TavNavigation from './src/navigaton/TavNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TavNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
