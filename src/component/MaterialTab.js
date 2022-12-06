import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {All} from './All';
import {Jean} from './Jean';
import {Jacket} from './Jacket';
import {Shoes} from './Shoes';
import {height, normalize} from '../helper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Hello} from '../screens';

const Tab = createMaterialTopTabNavigator();

export const MaterialTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
            backgroundColor: '#FF722A',
        },
        tabBarStyle: {
          width: '100%',
          justifyContent: 'center',
          marginTop: normalize(20)
        },
        tabBarLabelStyle: {
          fontSize: normalize(14),
          fontFamily: 'TenorSans',
          fontWeight: '400',
          fontStyle: 'normal',
          letterSpacing: normalize(1),
          textTransform: 'none',
          lineHeight: normalize(14),
          height: '100%',
          textAlign: 'center',
          height: 14,
        },
      }}>
      <Tab.Screen
        name="All"
        component={All}
        options={{
          tabBarLabel: 'All',
        }}
      />
      <Tab.Screen
        name="Jacket"
        component={Jacket}
        options={{
          tabBarLabel: 'Jacket',
        }}
      />
      <Tab.Screen
        name="Jean"
        component={Jean}
        options={{
          tabBarLabel: 'Jean',
        }}
      />
      <Tab.Screen
        name="Shoes"
        component={Shoes}
        options={{
          tabBarLabel: 'Shoes',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
