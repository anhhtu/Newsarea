import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: 25, height: 25 }}></View>
      <Text style={styles.titleText}>Liên hệ</Text>
      <TouchableOpacity>
        <Image
          style={styles.settingsIcon}
          source={require("../../assets/icons/setting.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderColor: "#797979",
  },
  titleText: {
    fontSize: 16.5,
    fontWeight: "bold",
    color: '#292929'
  },
  settingsIcon: {
    width: 21,
    height: 21,
  },
});
