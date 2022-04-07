import React from 'react'
import { NativeModules, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import './Translations'

const App = () => {
  const env = NativeModules.RNConfig.env;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>You are using</Text>
      <Text style={styles.envText}>{env}</Text>
      <Text style={styles.text}>environment</Text>
    </View>
  )
}
  // <Provider store={store}>
  //   {/**
  //    * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
  //    * and saved to redux.
  //    * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
  //    * for example `loading={<SplashScreen />}`.
  //    * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
  //    */}
  //   <PersistGate loading={null} persistor={persistor}>
  //     <ApplicationNavigator />
  //   </PersistGate>
  // </Provider>
// )

export default App

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

