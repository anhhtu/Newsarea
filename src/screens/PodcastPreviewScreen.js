import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { deviceWidth, deviceHeight } from "../extensions/DeviceDimension";

const PodcastPreviewScreen = ({ route }) => {
  const { podcast } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          style={{ width: deviceWidth, height: deviceWidth }}
          source={{ uri: podcast.titleImageURL }}
          blurRadius={20}
        >
          <LinearGradient
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
            style={{ height: deviceWidth + 100, top: -100 }}
          />

          <View></View>
          <View></View>
        </ImageBackground>
      </View>
      <Text>GIỚI THIỆU</Text>
      <Text>Discription</Text>
    </View>
  );
};

export default PodcastPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
