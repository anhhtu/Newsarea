import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { deviceWidth, deviceHeight } from "../extensions/DeviceDimension";

const AccountMethodScreen = () => {
  const [activeTab, setActiveTab] = useState("ĐĂNG NHẬP");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => setActiveTab('ĐĂNG NHẬP')}>
            <View style={[styles.tabWrapper, activeTab == 'ĐĂNG NHẬP' ? styles.activeWrapper : null]}>
              <Text style={[styles.tabText, activeTab == 'ĐĂNG NHẬP' ? styles.activeText : null]}>ĐĂNG NHẬP</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('TẠO TÀI KHOẢN')}>
            <View style={[styles.tabWrapper, activeTab == 'TẠO TÀI KHOẢN' ? styles.activeWrapper : null]}>
              <Text style={[styles.tabText, activeTab == 'TẠO TÀI KHOẢN' ? styles.activeText : null]}>TẠO TÀI KHOẢN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainView: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: 50,
    height: deviceHeight - 50,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 0.2
   },
  tabWrapper: {
    width: deviceWidth/2-40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#797979'
  },
  activeText: {
    color: '#292929'
  },
  activeWrapper: {
    borderBottomWidth: 2
  }
});
