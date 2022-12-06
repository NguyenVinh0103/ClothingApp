import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllComp = () => {
  return (
    <View style = {styles.container}>
      <Text>All</Text>
    </View>
  )
}

export const All = React.memo(AllComp)

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})