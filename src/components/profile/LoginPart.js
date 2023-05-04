import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";

import { deviceWidth } from "../../extensions/DeviceDimension";

const LoginPart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileAvatar} source={require('../../assets/icons/user.png')} />
      <Text style={{color: '#292929', fontSize: 25, fontWeight: 'bold', lineHeight: 32, marginVertical: 15}}>Đăng nhập hoặc Tạo tài khoản trên Vietcetera</Text>
      <Text style={{color: '#5B5B5B', lineHeight: 21}}>Trải nghiệm tất cả tính năng trên Vietcetera một cách tốt nhất</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AccountMethodScreen')}>
          <View style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AccountMethodScreen')}>
          <View style={styles.signupButtonWrapper}>
            <Text style={styles.signupText}>TẠO TÀI KHOẢN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPart;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#AFAFAF',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30
  },
  loginButtonWrapper: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    width: (deviceWidth-45)/2,
    borderRadius: 40,
    paddingVertical: 14,
  },
  signupButtonWrapper: {
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
    width: (deviceWidth-45)/2,
    borderRadius: 40,
    paddingVertical: 14,
  },
  loginText: {
    color: '#292929',
    fontWeight: 'bold'
  },
  signupText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
