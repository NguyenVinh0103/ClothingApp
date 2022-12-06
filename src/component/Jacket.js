import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height } from '../helper'

const JacketComp = () => {
  return (
    <View style = {styles.container}>
      <Text>Jacket</Text>
    </View>
  )
}

export const Jacket = React.memo(JacketComp)

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'while'
  }
})