import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { deviceWidth, deviceHeight } from "../extensions/DeviceDimension";
import LoginMethodView from "../components/loginAndSignup/LoginMethodView";
import SignupMethodView from "../components/loginAndSignup/SignupMethodView";

const AccountMethodScreen = ({navigation, route}) => {
  const {loginButtonText, signupButtonText} = route.params
  const [activeTab, setActiveTab] = useState(loginButtonText ? "ĐĂNG NHẬP" : "TẠO TÀI KHOẢN");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.tab}>
          <TouchableOpacity
            style={{ position: "absolute", alignSelf: "center", left: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 16, height: 16 }}
              source={require("../assets/icons/arrow-down.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("ĐĂNG NHẬP")}>
            <View
              style={[
                styles.tabWrapper,
                activeTab == "ĐĂNG NHẬP" ? styles.activeWrapper : null,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab == "ĐĂNG NHẬP" ? styles.activeText : null,
                ]}
              >
                ĐĂNG NHẬP
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("TẠO TÀI KHOẢN")}>
            <View
              style={[
                styles.tabWrapper,
                activeTab == "TẠO TÀI KHOẢN" ? styles.activeWrapper : null,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab == "TẠO TÀI KHOẢN" ? styles.activeText : null,
                ]}
              >
                TẠO TÀI KHOẢN
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <>
          {activeTab == "ĐĂNG NHẬP" ? (
            <LoginMethodView navigation={navigation} />
          ) : (
            <SignupMethodView navigation={navigation}/>
          )}
        </>
      </View>
    </SafeAreaView>
  );
};

export default AccountMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
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
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 30,
    borderBottomWidth: 0.2,
  },
  tabWrapper: {
    width: deviceWidth / 2 - 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontWeight: "bold",
    color: "#797979",
    position: "absolute",
  },
  activeText: {
    color: "#292929",
  },
  activeWrapper: {
    borderBottomWidth: 2,
  },
});
