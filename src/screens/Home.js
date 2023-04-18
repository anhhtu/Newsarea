import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsData } from "../data/posts";
import renderPost from "../components/home/Post";
import TopView from "../components/home/TopView";

const Home = () => {
  const [filteredPostsData, setFilteredPostsData] = useState(PostsData);

  return (
    <SafeAreaView style={styles.container}>
      <TopView/>

      <View style={styles.middleView}>
        <FlatList
          data={PostsData}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
      </View>
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

  middleView: {
    flex: 15,
  },

  bottomView: {
    height: 50,
  },
});
