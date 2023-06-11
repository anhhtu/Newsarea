import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import { deviceWidth } from "../extensions/DeviceDimension";

const PodcastPreviewScreen = ({ navigation, route }) => {
  const { podcast } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: deviceWidth,
          height: deviceWidth,
          position: "absolute",
        }}
        source={{ uri: podcast.titleImageURL }}
        blurRadius={15}
      >
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={{
            height: deviceWidth + 100,
            top: -100,
            left: 0,
            right: 0,
            position: "absolute",
          }}
        />
      </ImageBackground>

      <ScrollView>
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                backgroundColor: "#797979",
                alignSelf: "flex-start",
                padding: 13,
                borderRadius: 30,
                marginLeft: 10,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/icons/back-white.png")}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.upperView}>
            <Image
              style={{
                width: deviceWidth / 2 + 60,
                height: deviceWidth / 2 + 60,
                borderRadius: 20,
                borderWidth: 0.4,
                borderColor: "#FFF",
                marginBottom: 20,
              }}
              source={{ uri: podcast.titleImageURL }}
            />
            <Text style={{ color: "#797979" }}>{podcast.timestamp}</Text>
            <Text style={styles.titleText}>{podcast.title}</Text>
            <Text style={styles.inSeriesText}>{podcast.inSeries}</Text>
          </View>

          <View style={styles.buttonView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "32%",
              }}
            >
              <TouchableOpacity>
                <View style={styles.buttonWrapper}>
                  <Image
                    style={styles.buttonIcon}
                    source={require("../assets/icons/upload.png")}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.buttonWrapper, { flexDirection: "row" }]}>
                  <Image
                    style={styles.buttonIcon}
                    source={require("../assets/icons/comment.png")}
                  />
                  <Text style={{ marginLeft: 5, fontWeight: "600" }}>0</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('PodcastPlayerScreen', {podcast})}>
              <View
                style={styles.playButtonWrapper}
              >
                <Image
                  style={{ width: 15, height: 15 }}
                  source={require("../assets/icons/play-button.png")}
                />
                <Text
                  style={{ color: "#FFF", fontWeight: "600", marginLeft: 10 }}
                >
                  NGHE
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.underView}>
            <Text style={styles.introText}>GIỚI THIỆU</Text>
            <Text style={styles.descriptionText}>{podcast.description}</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default PodcastPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  upperView: {
    alignItems: "center",
    paddingHorizontal: 15,
  },
  underView: {
    paddingHorizontal: 15,
  },
  titleText: {
    color: "#292929",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    lineHeight: 25,
  },
  inSeriesText: {
    color: "#292929",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  introText: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  descriptionText: {
    color: "#3D3D3D",
    lineHeight: 20,
    fontSize: 15,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  buttonWrapper: {
    backgroundColor: "#E5E5E5",
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  playButtonWrapper: {
    flexDirection: "row",
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
  }
});
