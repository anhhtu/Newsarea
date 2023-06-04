import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { podcastData } from "../../data/podcasts";
import { deviceWidth, deviceHeight } from "../../extensions/DeviceDimension";

const LatestPodcasts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PODCAST{"\n"}MỚI NHẤT</Text>
      <View style={styles.contentView}>
        {podcastData.map((podcast) => (
          <View style={styles.podcast} key={podcast.id}>
            <View style={styles.podcastInfoView}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 10 }}
                source={{ uri: podcast.titleImageURL }}
              />
              <View style={{width: deviceWidth-130, justifyContent: 'space-evenly', paddingLeft: 15}}>
                <Text style={styles.timestampText}>{podcast.timestamp}</Text>
                <Text style={styles.titleText}>{podcast.title}</Text>
                <Text style={styles.inSeriesText}>{podcast.inSeries}</Text>
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
    fontWeight: "bold",
    lineHeight: 28,
    marginTop: 20,
  },
  contentView: {
    marginVertical: 15,
  },
  podcast: {
    flex: 1,
    marginBottom: 20
  },
  podcastInfoView: {
    flexDirection: 'row',
  },
  timestampText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#797979',
  }
});
