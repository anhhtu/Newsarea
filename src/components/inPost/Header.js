import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconsWrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icons}
          source={require("../../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <TouchableOpacity style={styles.iconsWrapper} onPress={() => navigation.popToTop()}>
        <Image
          style={styles.icons}
          source={require("../../assets/icons/homepage.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconsWrapper}>
        <Image
          style={styles.icons}
          source={require("../../assets/icons/more.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ABAAAA",
  },

  icons: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },

  iconsWrapper: {
    flex: 1,
    alignItems: 'center'
  },

  title: {
    flex: 5,
    color: "#292929",
    fontWeight: "600",
  },
});
