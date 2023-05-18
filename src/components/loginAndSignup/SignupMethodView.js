import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { deviceWidth } from "../../extensions/DeviceDimension";

const SignupMethodButton = (props) => (
  <TouchableOpacity>
    <View style={styles.buttonWrapper}>
      <Image style={styles.buttonIcon} source={props.iconPath} />
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </View>
  </TouchableOpacity>
);

const SignupMethodView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tạo tài khoản trên Newsarea</Text>
      <SignupMethodButton
        iconPath={require("../../assets/icons/google-method.png")}
        buttonText="ĐĂNG KÝ VỚI GOOGLE"
      />
      <SignupMethodButton
        iconPath={require("../../assets/icons/facebook-method.png")}
        buttonText="ĐĂNG KÝ VỚI FACEBOOK"
      />
      <SignupMethodButton
        iconPath={require("../../assets/icons/apple-method.png")}
        buttonText="ĐĂNG KÝ VỚI APPLE"
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <Text
          style={{
            textDecorationLine: "underline",
            marginTop: 20,
            fontWeight: "600",
            color: "#797979",
          }}
        >
          TIẾP TỤC VỚI EMAIL
        </Text>
      </TouchableOpacity>
      <Text style={styles.policyText}>
        <Text>Bằng việc tạo tài khoản, bạn đã đồng ý với các </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            fontSize: 12,
            color: "#797979",
          }}
        >
          ĐIỀU KHOẢN SỬ DỤNG & CHÍNH SÁCH BẢO MẬT
        </Text>
        <Text> của Newsarea</Text>
      </Text>
    </View>
  );
};

export default SignupMethodView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 31,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  },
  buttonWrapper: {
    backgroundColor: "#EFEFEF",
    width: deviceWidth - 30,
    height: 60,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 30,
  },
  buttonText: {
    fontWeight: "600",
  },
  policyText: {
    color: "#797979",
    position: "absolute",
    bottom: 40,
    paddingHorizontal: 20,
    fontSize: 12,
    textAlign: "center",
  },
});
