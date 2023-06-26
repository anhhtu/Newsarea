import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

const HeaderPodcastPlayerScreen = ({navigation}) => {
    const [activeTab, setActiveTab] = useState("ĐANG PHÁT");


  return (
    <View style={styles.headerBar}>
        <TouchableOpacity
          style={{ position: "absolute" }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/icons/arrow-down.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setActiveTab("ĐANG PHÁT");
            }}
          >
            <View
              style={[
                styles.tabStyle,
                activeTab == "ĐANG PHÁT"
                  ? { borderBottomWidth: 2, borderBottomColor: "#292929" }
                  : null,
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: activeTab == "ĐANG PHÁT" ? "#292929" : "#797979",
                }}
              >
                ĐANG PHÁT
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setActiveTab("THÔNG TIN TẬP");
            }}
          >
            <View
              style={[
                styles.tabStyle,
                activeTab == "THÔNG TIN TẬP"
                  ? { borderBottomWidth: 2, borderBottomColor: "#292929" }
                  : null,
              ]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: activeTab == "THÔNG TIN TẬP" ? "#292929" : "#797979",
                }}
              >
                THÔNG TIN TẬP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default HeaderPodcastPlayerScreen

const styles = StyleSheet.create({
    headerBar: {
        borderBottomWidth: 0.4,
        borderBottomColor: "#797979",
        justifyContent: "center",
      },
      tabContainer: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        width: "80%",
      },
      tabStyle: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
      },
})