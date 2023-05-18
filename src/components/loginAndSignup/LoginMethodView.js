import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { deviceWidth } from "../../extensions/DeviceDimension";

const LoginMethodButton = (props) => (
  <TouchableOpacity>
    <View style={styles.buttonWrapper}>
      <Image style={styles.buttonIcon} source={props.iconPath} />
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </View>
  </TouchableOpacity>
);

const LoginMethodView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Đăng nhập trên Newsarea</Text>
      <LoginMethodButton
        iconPath={require("../../assets/icons/google-method.png")}
        buttonText="TIẾP TỤC VỚI GOOGLE"
      />
      <LoginMethodButton
        iconPath={require("../../assets/icons/facebook-method.png")}
        buttonText="TIẾP TỤC VỚI FACEBOOK"
      />
      <LoginMethodButton
        iconPath={require("../../assets/icons/apple-method.png")}
        buttonText="TIẾP TỤC VỚI APPLE"
      />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{textDecorationLine: 'underline', marginTop: 20, color: '#797979', fontWeight: '600'}}>TIẾP TỤC VỚI EMAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMethodView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },
  titleText: {
    fontSize: 31,
    fontWeight: "bold",
    textAlign: 'center',
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
    fontWeight: '600'
  }
});
