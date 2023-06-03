import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { podcastData } from "../../data/podcasts";

const LatestPodcasts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PODCAST{"\n"}MỚI NHẤT</Text>
      <View style={styles.contentView}>
        {podcastData.map((podcast) => (
          <View style={styles.podcast} key={podcast.id}>
            <View style={styles.podcastInfoView}>
              <View>
                <Image/>
              </View>
              <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={styles.podcastPlayerView}></View>
          </View>
        ))}
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
    color: "#292929",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 20,
  },
  contentView: {
    marginVertical: 15,
  },
});
