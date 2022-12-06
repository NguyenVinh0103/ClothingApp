import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JeanComp = () => {
  return (
    <View>
      <Text>Comp</Text>
    </View>
  )
}

export const Jean = React.memo(JeanComp)

const styles = StyleSheet.create({})