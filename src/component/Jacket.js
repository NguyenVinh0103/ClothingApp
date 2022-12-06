import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JacketComp = () => {
  return (
    <View>
      <Text>Jacket</Text>
    </View>
  )
}

export const Jacket = React.memo(JacketComp)

const styles = StyleSheet.create({})