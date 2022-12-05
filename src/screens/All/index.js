import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, normalize, normalizeHorizontal } from '../../helper';

export const All = () => {
  return (
    <View style = {styles.container}>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: height,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})