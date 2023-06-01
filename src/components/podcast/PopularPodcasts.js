import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PopularPodcasts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NGHE{'\n'}NHIỀU NHẤT</Text>
    </View>
  )
}

export default PopularPodcasts

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    title: {
        color: '#292929',
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 28
    }
})