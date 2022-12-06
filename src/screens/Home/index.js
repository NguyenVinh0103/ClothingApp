import {StyleSheet, Text, View, Image, TouchableOpacity,TextInput} from 'react-native';
import React from 'react';

import {IC_NOTIFICATION, IC_SEARCH, IMG_SLIDER, IC_NEXT} from '../../assets';

import {colors, normalize, normalizeHorizontal} from '../../helper';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialTab } from '../../component';

export const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {paddingTop: Math.max(insets.top, 40)}]}>
      <View style={styles.content}>
        <View style={styles.txt}>
          <Text style={styles.txtContent}>{'Welcome Back!'}</Text>
          <Text style={styles.txtHi}>{'Falcon Thought'}</Text>
        </View>

        <Image
          source={IC_NOTIFICATION}
          resizeMode="contain"
          style={styles.imgNotification}
        />
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder=" What are you looking for..."
          placeholderTextColor={'#333'}
          style={styles.tipSearch}
        />
        <TouchableOpacity style={styles.btnSearch}>
          <Image
            source={IC_SEARCH}
            resizeMode="contain"
            style={styles.icSearch}
          />
        </TouchableOpacity>
      </View>
      <View style = {styles.slider}>
        <View style = {styles.txtSlider}>
          <Text style = {styles.txtSliderContainer}>{'Shop wit us!'}</Text>
          <Text style = {styles.txtSliderContent}>{'Get 40% Off for all iteams'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MaterialTab')}  style = {styles.shopNow}>
            <Text style = {styles.txtShop}>{'Shop now'}</Text>
            <Image source={IC_NEXT} style = {styles.icNext} resizeMode ='contain' />
          </TouchableOpacity>
        </View>
        <Image source={IMG_SLIDER} style = {styles.imgSlider} resizeMode = 'contain' />
        <MaterialTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalizeHorizontal(20),
    alignItems: 'center',
  },
  imgNotification: {
    height: normalize(20),
    aspectRatio: 1,
  },
  txtContent: {
    color: colors.TEXT,
    fontSize: normalize(12),
    fontWeight: '400',
  },
  txtHi: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: colors.TEXT,
  },
  tipSearch: {
    width: '90%',
    backgroundColor: '#F4F4F4',
    alignSelf: 'center',
    borderRadius: 28,
    marginTop: normalize(20),
    paddingLeft: normalizeHorizontal(50),
    fontSize: normalize(16)
  },
  icSearch: {
    height: normalize(20),
    aspectRatio: 1,
    marginTop: normalize(20),
    marginLeft: normalizeHorizontal(40),
  },
  search: {
    justifyContent: 'center',
  },
  btnSearch: {
    position: 'absolute',
    alignItems: 'center',
  },
  slider:{
    backgroundColor:'#F4F4F4',
    width: '90%',
    aspectRatio: 2,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop: normalize(20),
    borderRadius: 20,
  },
  shopNow:{
    flexDirection: 'row',
    marginTop: normalize(20),
    alignItems:'center',
  },
  txtSliderContainer:{
    fontSize: normalize(16),
    color: colors.TEXT,
    fontWeight: '400'
  },
  txtSliderContent: {
    fontSize: normalize(20),
    color: colors.TEXT,
    fontWeight: 'bold',
    width: 160,
    marginTop: normalize(10),
    letterSpacing: 1
  },
  txtSlider:{
    marginHorizontal: normalizeHorizontal(20)
  },
  txtShop:{
    color: colors.TEXT,
    fontSize: normalize(16),
    fontWeight: '700'
  },
  icNext:{
    height: normalize(20),
    aspectRatio: 1
  },
  imgSlider:{
    height: normalize(100),
    aspectRatio: 1,
    marginRight: normalizeHorizontal(20)
  }
});
