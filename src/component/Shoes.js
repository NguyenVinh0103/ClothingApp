import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShoesComp = () => {
  return (
    <View style = {styles.container}>
      <Text>Shoes</Text>
    </View>
  )
}

export const Shoes = React.memo(ShoesComp)

const styles = StyleSheet.create({})