import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import React, { useState } from "react";

const MainView = ({ item }) => {
  const [isFollowAuthor, setFollowAuthor] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.categoryAndTimeWrapper}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text
              style={{
                color: "#686868",
                fontWeight: "700",
                marginHorizontal: 9,
              }}
            >
              •
            </Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <View style={styles.authorWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.authorAvatar}
                source={{ uri: item.authorAvatar }}
              />
              <Text style={styles.authorText}>{item.author}</Text>
            </View>
            <TouchableOpacity style={styles.followButton} onPress={() => setFollowAuthor(isFollowAuthor!=true ? true : false)}>
              <Text style={styles.followText}>{isFollowAuthor!=true ?"THEO DÕI" : 'ĐÃ THEO DÕI'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image style={styles.titleImage} source={{ uri: item.imageURL }} />
        <Text style={styles.contentText}>{item.content}</Text>
      </ScrollView>
    </View>
  );
};

export default MainView;

let deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 13,
  },
  header: {
    padding: 15,
  },
  categoryAndTimeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
  },
  categoryText: {
    color: "#017840",
    fontSize: 12,
  },
  timestamp: {
    color: "#797979",
    fontSize: 12,
  },
  title: {
    color: "#292929",
    fontWeight: "bold",
    fontSize: 26,
    letterSpacing: 0.4,
    lineHeight: 33,
    paddingBottom: 12,
  },
  subTitle: {
    color: "#797979",
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 23
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  authorText: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
  authorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  followButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ABABAB",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  followText: {
    color: "#292929",
    fontWeight: "bold",
    fontSize: 12,
  },
  titleImage: {
    resizeMode: "contain",
    alignSelf: 'center',
    width: deviceWidth,
    height: deviceWidth*9/16,
  },
  contentText: {
    color: '#3F3F3F',
    fontSize: 18,
    letterSpacing: 0.4,
    lineHeight: 28,
    padding: 15
  }
});
