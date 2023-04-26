import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const BottomView = ({ item }) => {
  const [isLiked, setLike] = useState();
  const [isFavourite, setFavourite] = useState();
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleAddToFavourite = () => {
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {setFavourite(isFavourite != true ? true : false), handleAddToFavourite()}}
      >
        <Image
          style={styles.icons}
          source={
            isFavourite != true
              ? require("../../assets/icons/inactive-bookmark.png")
              : require("../../assets/icons/active-bookmark.png")
          }
        />
      </TouchableOpacity>

      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity
          onPress={() => setLike(isLiked != true ? true : false)}
        >
          <View style={styles.buttonWrapper}>
            <Image
              style={styles.icons}
              source={
                isLiked != true
                  ? require("../../assets/icons/heart.png")
                  : require("../../assets/icons/red-heart.png")
              }
            />
            <Text style={styles.likeAndCommentText}>
              {isLiked != true ? item.like : item.like + 1}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: 30, borderRightWidth: 1 }}></View>
        <TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Image
              style={styles.icons}
              source={require("../../assets/icons/comment.png")}
            />
            <Text style={styles.likeAndCommentText}>{item.comment.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image
          style={styles.icons}
          source={require("../../assets/icons/upload.png")}
        />
      </TouchableOpacity>
      <>
      {isAlertVisible==true ? (<View style={styles.addToFavouriteAlert}>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {isFavourite!=true ? 'ĐÃ XÓA LƯU' : 'ĐÃ LƯU BÀI VIẾT'}
        </Text>
      </View>) : null}
      </>
    </View>
  );
};

export default BottomView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  icons: {
    width: 25,
    height: 25,
  },
  centerButtonWrapper: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 100,
    width: 170,
    height: 50,
    paddingHorizontal: 15,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  likeAndCommentText: {
    paddingLeft: 8,
    fontWeight: "600",
  },
  addToFavouriteAlert: {
    position: "absolute",
    height: 55,
    width: "100%",
    backgroundColor: "#292929",
    bottom: 65,
    left: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
