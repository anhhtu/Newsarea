import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllPodcastShows = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TẤT CẢ{'\n'}SHOW PODCAST</Text>
    </View>
  )
}

export default AllPodcastShows

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