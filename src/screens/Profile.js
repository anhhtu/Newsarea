import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View
} from "react-native";
import React from "react";

import { deviceWidth } from "../extensions/DeviceDimension";

import Header from "../components/profile/Header";
import LoginPart from "../components/profile/LoginPart";
import AboutPart from "../components/profile/AboutPart";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <LoginPart navigation={navigation}/>
        <AboutPart />
      </ScrollView>
      <View style={{height: 54}}></View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mainView: {
    width: deviceWidth - 30,
    alignSelf: "center",
  },
});
