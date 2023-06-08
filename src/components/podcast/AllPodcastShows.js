import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { podcastShowData } from "../../data/podcast-shows";
import LatestPodcasts from "./LatestPodcasts";
import PopularPodcasts from "./PopularPodcasts";
import { deviceWidth } from "../../extensions/DeviceDimension";

const AllPodcastShows = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View>
        <Image
          style={styles.podcastShowImage}
          source={{ uri: item.imageURL }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <LatestPodcasts navigation={navigation} />
            <PopularPodcasts navigation={navigation} />
            <Text style={styles.title}>TẤT CẢ{"\n"}SHOW PODCAST</Text>
          </>
        }
        ListFooterComponent={
          <>
            <View style={{ height: 100 }}></View>
          </>
        }
        data={podcastShowData}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AllPodcastShows;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    color: "#292929",
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 30,
    marginBottom: 10,
    marginTop: 15
  },
  podcastShowImage: {
    width: (deviceWidth-60)/3,
    height: (deviceWidth-60)/3,
    borderRadius: 12,
    margin: 5
  },
});
