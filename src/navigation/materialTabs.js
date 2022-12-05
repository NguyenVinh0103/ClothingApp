import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {All, Jacket, Jean, Shoes} from '../screens';

const Tab = createMaterialTopTabNavigator();

const MaterialTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 16,
          marginLeft: 12,
          marginRight: 12,
          elevation: 0,
          backgroundColor: '#ffb6c1',
          borderRadius: 12,
          height: 44,
          shadowColor: '#7fff00',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="All"
        component={All}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{color: focused ? '#e91e63' : '#e91e63', fontSize: 12}}>
                {'All'}
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Jacket"
        component={Jacket}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>
                {'Jacket'}
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Jean"
        component={Jean}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>
                {'Jean'}
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shoes"
        component={Shoes}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>
                {'Shoes'}
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialTab;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
