import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "../data/icons";
import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";
import posts from "../data/posts";
import renderPost from "../components/home/Post";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topInTop}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require("../assets/icons/HomeLogo.png")}
            />
          </View>
          <View style={styles.topViewIconsContainer}>
            {icons.map((icon, index) => (
              <TouchableOpacity key={index}>
                <View>
                  <Image
                    style={styles.topViewIcons}
                    source={{ uri: icon.url }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.bottomInTop}></View>
      </View>

      <View style={styles.middleView}>
        <FlatList data={posts} renderItem={renderPost} keyExtractor={(item) => item.id}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  topView: {
    flex: 1.9,
    borderBottomWidth: 1,
    borderColor: colors.dividerColor,
  },
  topInTop: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  bottomInTop: {
    flex: 1,
  },
  topViewIconsContainer: {
    flexDirection: "row",
    width: 110,
    justifyContent: "space-between",
  },
  topViewIcons: {
    width: 22,
    height: 22,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
  logoWrapper: {
    width: 140,
  },

  middleView: {
    flex: 12,
  },

});
