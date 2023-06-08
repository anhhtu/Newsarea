import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import AllPodcastShows from "../components/podcast/AllPodcastShows";

const Podcasts = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Podcasts</Text>
      </View>

        <AllPodcastShows navigation={navigation} />
      <View style={{height: 56}}></View>
    </SafeAreaView>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    color: "#292929",
  },
});
