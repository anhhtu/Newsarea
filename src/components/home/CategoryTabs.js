import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";

import { categoryList } from "../../data/categories";
import { useSelector, useDispatch } from "react-redux";
import { filterPostsOnCategory } from "../../redux/slice";

const CategoryTabs = () => {
  const activeTab = useSelector(state => state.postFilter.activeTab)
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={styles.bottomInTop}
      contentContainerStyle={styles.contentContainerStyle}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categoryList.map((category) => (
        <Pressable
          onPress={() => {
            dispatch(filterPostsOnCategory(category.name))
          }}
          key={category.id}
        >
          <View
            style={[
              styles.categoryWrapper,
              category.name == activeTab ? styles.activeTabStyle : null,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                { color: category.name == activeTab ? "#292929" : "#686868" },
              ]}
            >
              {category.name}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  bottomInTop: {
    flex: 1,
    marginHorizontal: 2,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  categoryWrapper: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: 'center'
  },
  categoryText: {
    color: "#686868",
    fontWeight: "700",
    alignSelf: 'center',
  },
  activeTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#292929",
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
