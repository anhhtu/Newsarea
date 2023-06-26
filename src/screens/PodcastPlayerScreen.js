import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { deviceWidth } from "../extensions/DeviceDimension";
import Header from "../components/podcast/HeaderPodcastPlayerScreen";

const PodcastPlayerScreen = ({ navigation, route }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const { podcast } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>

      <View style={styles.artworkView}>
        <View style={styles.artworkWrapper}>
          <Image
            style={styles.artworkStyle}
            source={{ uri: podcast.titleImageURL }}
          />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}} numberOfLines={1}>{podcast.title}</Text>
        <Text style={{color: '#797979', fontSize: 13}}>{podcast.inSeries}</Text>
        <Slider style={styles.progressBar} value={10} minimumValue={0} maximumValue={100} thumbTintColor="pink" />
      </View>

      <View style={styles.controllerContainer}>
        <View style={styles.controllerButtonWrapper}>
          <TouchableOpacity>
            <Image style={{width: 22, height: 22}} source={require('../assets/icons/play-back.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.fastIcon} source={require('../assets/icons/fast-back.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(isPlaying ? false : true)}>
            <Image style={styles.playIcon} source={ isPlaying ? require('../assets/icons/pause-button.png') : require('../assets/icons/play-button.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.fastIcon} source={require('../assets/icons/fast-forward.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{width: 22, height: 22}} source={require('../assets/icons/play-forward.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.additionButtonWrapper}></View>
      </View>
    </SafeAreaView>
  );
};

export default PodcastPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
  },
  artworkView: {
    alignItems: "center",
    justifyContentL: "center",
    marginVertical: 30,
  },
  artworkStyle: {
    width: deviceWidth / 2 + 60,
    height: deviceWidth / 2 + 60,
    borderRadius: 20,
  },
  artworkWrapper: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.1,
    shadowRadius: 20
  },
  fastIcon: {
    width: 27,
    height: 27,
  },
  playIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30
  },
  playButton: {
    backgroundColor: '#292929',
    padding: 25,
    borderRadius: 50,
  },
  controllerButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  
  additionButtonWrapper: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    width: 200
  }
});
