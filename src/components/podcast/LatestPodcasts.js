import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { podcastData } from "../../data/podcasts";
import { deviceWidth } from "../../extensions/DeviceDimension";

const LatestPodcasts = ({navigation}) => {

  const latestPodcasts = podcastData.slice(0,5)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PODCAST{"\n"}MỚI NHẤT</Text>
      <View style={styles.contentView}>
        {latestPodcasts.map((podcast) => (
          <TouchableOpacity key={podcast.id} onPress={() => navigation.navigate('PodcastPreviewScreen', {podcast})}>
            <View style={styles.podcast}>
              <View style={styles.podcastInfoView}>
                <Image
                  style={styles.podcastTitleImage}
                  source={{ uri: podcast.titleImageURL }}
                />
                <View style={styles.podcastTextInfoContainer}>
                  <Text style={styles.timestampText}>{podcast.timestamp}</Text>
                  <Text style={styles.titleText} numberOfLines={2}>
                    {podcast.title}
                  </Text>
                  <Text style={styles.inSeriesText}>{podcast.inSeries}</Text>
                </View>
              </View>

              <View style={styles.podcastPlayerView}></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LatestPodcasts;

const styles = StyleSheet.create({
  container: {
  },
  title: {
    color: "#292929",
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 30,
    marginTop: 20,
  },
  contentView: {
    marginVertical: 15,
  },
  podcast: {
    flex: 1,
    marginBottom: 20,
  },
  podcastInfoView: {
    flexDirection: "row",
  },
  podcastTextInfoContainer: {
    width: deviceWidth - 130,
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  timestampText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#797979",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  inSeriesText: {
    color: "#797979",
    fontSize: 12,
    fontWeight: "600",
  },
  podcastTitleImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
