import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {All, Jacket, Jean, Shoes} from '../screens';

const Tab = createMaterialTopTabNavigator();

export const MaterialTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#000'},
      }}>
      <Tab.Screen
        name="All"
        component={All}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: focused ? '#fff' : '#000', fontSize: 12}}>
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

const styles = StyleSheet.create({});
