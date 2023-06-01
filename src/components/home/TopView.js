import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../../theme/colors";
import CategoryTabs from "./CategoryTabs";

const TopView = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.topInTop}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require("../../assets/icons/HomeLogo.png")}
          />
        </View>
        <View style={styles.topViewIconsContainer}>
          <TouchableOpacity>
            <View>
              <Image style={styles.topViewIcons} source={require('../../assets/icons/magnifying-glass.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image style={styles.topViewIcons} source={require('../../assets/icons/bookmark.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image style={styles.topViewIcons} source={require('../../assets/icons/category.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <CategoryTabs />
    </View>
  );
};

export default TopView;

const styles = StyleSheet.create({
  topView: {
    flex: 1.9,
    borderBottomWidth: 0.5,
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
    marginHorizontal: 2,
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
});
