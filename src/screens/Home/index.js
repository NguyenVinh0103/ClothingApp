import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {IC_NOTIFICATION} from '../../assets';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style = {styles.txt}>
          <Text style={styles.txtContent}>index</Text>
          <Text style={styles.txtHi}>index</Text>
        </View>

        <Image
          source={IC_NOTIFICATION}
          resizeMode="contain"
          style={styles.imgNotification}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
