import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellcomeScreen from '../screens/WellcomeScreen';
import CatogeryScreen from '../screens/CatogeryScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TavNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarIndicatorStyle: {backgroundColor: '#e91e63'},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="Welcome" component={WellcomeScreen} />
      <Tab.Screen name="Categories" component={CatogeryScreen} />
    </Tab.Navigator>
  );
};

export default TavNavigation;

const styles = StyleSheet.create({});
