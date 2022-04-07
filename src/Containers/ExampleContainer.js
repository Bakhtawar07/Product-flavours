import React from 'react'
import { StyleSheet, View, Text, NativeModules } from 'react-native'

const ExampleContainer = () => {
  const env = NativeModules.RNConfig.env;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>You are using</Text>
      <Text style={styles.envText}>{env}</Text>
      <Text style={styles.text}>environment</Text>
    </View>
  )
}

export default ExampleContainer

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent:'center'
  },
  text: {
    fontSize:32,
    textAlign:'center'
  },
  envText:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
    marginVertical:16
  }
})
