import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import { PostsData } from "../../data/posts";
import renderPost from "./Post";

const MiddleView = () => {
  return (
    <View style={styles.middleView}>
      <FlatList
        data={PostsData}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MiddleView;

const styles = StyleSheet.create({
  middleView: {
    flex: 15,
  },
});
