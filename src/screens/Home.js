import {
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import TopView from "../components/home/TopView";
import MiddleView from "../components/home/MiddleView";

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <TopView/>
      <MiddleView/>
      <View style={styles.bottomView}></View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  bottomView: {
    height: 50,
  },
});
