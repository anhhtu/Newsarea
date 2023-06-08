import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

import { deviceWidth, deviceHeight } from "../../extensions/DeviceDimension";
import { podcastData } from "../../data/podcasts";

const PopularPodcasts = ({navigation}) => {

  const popularPodcastsData = podcastData.slice(0,5)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NGHE{"\n"}NHIỀU NHẤT</Text>
      <View style={styles.contentView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {popularPodcastsData.map((podcast) => (
            <View style={{ flexDirection: "row" }} key={podcast.id}>
              <TouchableOpacity key={podcast.id} onPress={() => navigation.navigate('PodcastPreviewScreen', {podcast})}>
                <View style={styles.podcast}>
                  <View style={styles.podcastInfoView}>
                    <Image
                      style={styles.podcastTitleImage}
                      source={{ uri: podcast.titleImageURL }}
                    />
                    <View style={styles.podcastTextInfoContainer}>
                      <Text style={styles.timestampText}>
                        {podcast.timestamp}
                      </Text>
                      <Text style={styles.titleText} numberOfLines={2}>
                        {podcast.title}
                      </Text>
                      <Text style={styles.inSeriesText}>
                        {podcast.inSeries}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.podcastPlayerView}></View>
                </View>
              </TouchableOpacity>
              {popularPodcastsData.indexOf(podcast) == popularPodcastsData.length - 1 ? null : (
                <View style={styles.divider}></View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PopularPodcasts;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#292929",
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 30,
  },
  contentView: {
    marginVertical: 15,
  },
  podcast: {
    flex: 1,
  },
  podcastInfoView: {
    flexDirection: "row",
  },
  podcastTextInfoContainer: {
    width: deviceWidth - 250,
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
  divider: {
    height: 100,
    borderWidth: 0.4,
    borderColor: "grey",
    marginHorizontal: 20,
    alignSelf: "center",
    opacity: 0.5,
  },
});
