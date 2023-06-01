import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const LatestPodcasts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PODCAST{"\n"}MỚI NHẤT</Text>
      <View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default LatestPodcasts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    color: '#292929',
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 28
  },
});
