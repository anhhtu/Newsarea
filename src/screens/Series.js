import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Series = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Series</Text>
      </View>
      <Text>Series</Text>
    </SafeAreaView>
  )
}

export default Series

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderColor: "#AFAFAF",
  },
  titleText: {
    fontSize: 16.5,
    fontWeight: "bold",
    color: '#292929'
  },
})