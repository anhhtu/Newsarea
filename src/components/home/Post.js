import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const renderPost = ({ item }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.imageWrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: item.imageURL }} />
      </View>
    </TouchableOpacity>

    <View style={styles.postInfo}>
      <TouchableOpacity>
        <Text style={styles.postTitle}>{item.title}</Text>
      </TouchableOpacity>
      <Text style={styles.postSubTitle}>{item.subTitle}</Text>

      <View style={styles.postBottomWrapper}>
        <View style={styles.postUnderInfoWrapper}>
          <Text style={styles.postAuthor}>{item.author}</Text>
          <Text
            style={{ color: "#686868", fontWeight: "700", marginHorizontal: 9 }}
          >
            •
          </Text>
          <Text style={styles.postCategory}>{item.category}</Text>
        </View>
        <View>
          <Image
            style={{ width: 22, height: 22 }}
            resizeMode="stretch"
            source={require("../../assets/icons/post-bookmark.png")}
          />
        </View>
      </View>
    </View>
  </View>
);

export default renderPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 420,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 30,
    borderBottomWidth: 0.4,
    borderBottomColor: "#ABABAB",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
  imageWrapper: {
    flex: 4,
    width: "100%",
    height: "100%",
  },
  postInfo: {
    flex: 3,
  },
  postTitle: {
    color: "#292929",
    fontWeight: "bold",
    fontSize: 21,
    paddingVertical: 12,
    lineHeight: 27,
  },
  postSubTitle: {
    color: "#686868",
    paddingBottom: 12,
    lineHeight: 21,
  },
  postBottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postUnderInfoWrapper: {
    flexDirection: "row",
  },
  postAuthor: {
    color: "#686868",
    fontWeight: "600",
  },
  postCategory: {
    color: "#686868",
    fontWeight: "600",
  },
});
