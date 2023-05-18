import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import InputField from "../components/loginAndSignup/InputField";

const SignupScreen = ({ navigation }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [policyAgree, setPolicyAgree] = useState(true);
  const [receiveNews, setReceiveNews] = useState(true);

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
        <ScrollView
          style={{ paddingVertical: 30 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.titleText}>Tạo tài khoản với Email</Text>
          <Text style={styles.subTitleText}>
            Nhập địa chỉ email, mật khẩu và xác thực captcha để tạo tài khoản
          </Text>
          <InputField inputTitle={"EMAIL"} placeholder={"example@email.com"} />
          <InputField inputTitle={"MẬT KHẨU"} placeholder={"Ít nhất 6 kí tự"} />

          <View style={styles.additionalInfo}>
            <TouchableOpacity
              onPress={() =>
                setShowAdditionalInfo(
                  showAdditionalInfo == false ? true : false
                )
              }
            >
              <View style={styles.showAdditionalInfoButton}>
                <Text style={{ fontWeight: "bold", marginRight: 10 }}>
                  THÔNG TIN BỔ SUNG
                </Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={
                    showAdditionalInfo == true
                      ? require("../assets/icons/arrow-up-black.png")
                      : require("../assets/icons/arrow-down-black.png")
                  }
                />
              </View>
            </TouchableOpacity>

            {showAdditionalInfo == true ? (
              <>
                <InputField
                  inputTitle={"HỌ VÀ TÊN"}
                  placeholder={"VD: Nguyễn Văn A"}
                />
                <InputField
                  inputTitle={"NGÀY SINH"}
                  placeholder={"DD/MM/YYYY"}
                />
                <InputField
                  inputTitle={"SỐ ĐỊNH DANH"}
                  placeholder={"CMND/CCCD/Sổ hộ chiếu"}
                />
                <InputField
                  inputTitle={"NGÀY CẤP"}
                  placeholder={"DD/MM/YYYY"}
                />
                <InputField inputTitle={"NƠI CẤP"} placeholder={"VD: Hà Nội"} />
              </>
            ) : null}
          </View>

          <View>
            <Text style={{ color: "#292929", fontSize: 13, lineHeight: 18 }}>
              Nếu bạn dưới 14 tuổi và chưa có CMND/ CCCD/ Hộ chiếu, xin vui lòng
              liên hệ người giám hộ theo quy định của Pháp luật để quyết định
              việc đăng ký. Thông tin đăng ký tài khoản sẽ là thông tin của
              người giám hộ và người này sẽ chịu trách nhiệm trước pháp luật về
              việc đăng ký tài khoản sử dụng Mạng Xã Hội Newsarea.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setPolicyAgree(policyAgree == true ? false : true)}
          >
            <View style={[styles.checkRow, { marginVertical: 15 }]}>
              <Image
                style={{ width: 28, height: 28 }}
                source={
                  policyAgree == true
                    ? require("../assets/icons/check-box.png")
                    : require("../assets/icons/check-box-empty.png")
                }
              />
              <Text style={styles.checkText}>
                Tôi đồng ý với Quy Định và Thỏa thuận người dùng Mạng Xã Hội
                Newsarea
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setReceiveNews(receiveNews == true ? false : true)}
          >
            <View style={[styles.checkRow, { paddingBottom: 72 }]}>
              <Image
                style={{ width: 28, height: 28 }}
                source={
                  receiveNews == true
                    ? require("../assets/icons/check-box.png")
                    : require("../assets/icons/check-box-empty.png")
                }
              />
              <Text style={styles.checkText}>
                Nhận tin tức mới nhất từ Newsarea
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity disabled={true}>
          <View style={styles.loginButtonWrapper}>
            <Text style={styles.loginText}>TẠO TÀI KHOẢN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
    paddingTop: 10,
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
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  subTitleText: {
    color: "#797979",
    fontSize: 15,
    lineHeight: 20,
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
    backgroundColor: "#EAEAEA",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 40,
  },
  loginText: {
    color: "#939393",
    fontSize: 16,
    fontWeight: "bold",
  },

  additionalInfo: {
    borderColor: "#797979",
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  showAdditionalInfoButton: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 15,
    marginVertical: 15,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    lineHeight: 21,
    marginLeft: 10,
    fontSize: 15,
  },
});
