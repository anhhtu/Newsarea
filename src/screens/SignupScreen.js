import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignupScreen</Text>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})