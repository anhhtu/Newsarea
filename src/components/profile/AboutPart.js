import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const AboutPart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <Text>Về Newsarea</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <Text>Điều khoản sử dụng</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <Text>Chính sách bảo mật</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <View>
              <Text>Góp ý ứng dụng</Text>
              <Text>Ứng dụng của chúng tôi tốt hơn 1 phần là nhờ bạn</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <View>
              <Text>Liên hệ</Text>
              <Text>Email: team@newsarea.com</Text>
              <Text>SĐT: +84 286 286 2989</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.aboutRow}>
            <Image />
            <Text>Thông tin pháp lý</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.underPart}></View>
    </View>
  );
};

export default AboutPart;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  aboutRow: {
    flexDirection: "row",
    height: 65,
    alignItems: 'center'
  },
});
