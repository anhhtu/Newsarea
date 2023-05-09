import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import InputField from "../components/loginAndSignup/InputField";

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../assets/icons/close.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainView}>
        <View style={styles.mailIconWrapper}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require("../assets/icons/email.png")}
          />
        </View>
        <Text style={styles.titleText}>Đăng nhập với Email</Text>
        <Text style={styles.subTitleText}>
          Nhập địa chỉ email và mật khẩu để tiếp tục
        </Text>
        <InputField inputTitle={"EMAIL"} placeholder={"example@email.com"} />
        <InputField inputTitle={"MẬT KHẨU"} placeholder={"Ít nhất 6 kí tự"} />
        <TouchableOpacity>
          <View style={styles.forgotPasswordWrapper}>
            <Text style={styles.forgotPasswordText}>QUÊN MẬT KHẨU?</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity disabled={true}>
          <View style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topView: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  mainView: {
    flex: 13,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#797979",
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10
  },
  mailIconWrapper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    padding: 13,
    borderRadius: 30,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 27,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  subTitleText: {
    color: "#797979",
    fontSize: 15,
    letterSpacing: 0.3,
    marginTop: 5,
    marginBottom: 15,
  },
  forgotPasswordWrapper: {
    alignSelf: "flex-end",
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
  },
  forgotPasswordText: {
    fontWeight: "bold",
  },
  loginButtonWrapper: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 40
  },
  loginText: {
    color: '#939393',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
