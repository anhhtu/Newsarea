import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const AboutRow = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.aboutRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.icon} source={props.iconPath} />
          <Text style={styles.mainText}>{props.mainText}</Text>
        </View>
        <View>
          <Text style={styles.subText}>{props.firstSubText}</Text>
          <Text style={styles.subText}>{props.secondSubText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AboutPart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <AboutRow
          iconPath={require("../../assets/icons/hut.png")}
          mainText="Về Newsarea"
        />
        <AboutRow
          iconPath={require("../../assets/icons/tick.png")}
          mainText="Điều khoản sử dụng"
        />
        <AboutRow
          iconPath={require("../../assets/icons/book.png")}
          mainText="Chính sách bảo mật"
        />
        <AboutRow
          iconPath={require("../../assets/icons/envelope.png")}
          mainText="Góp ý ứng dụng"
          firstSubText="Ứng dụng của chúng tôi tốt hơn một phần là nhờ bạn"
        />
        <AboutRow
          iconPath={require("../../assets/icons/telephone.png")}
          mainText="Liên hệ"
          firstSubText="Email: team@newsarea.com"
          secondSubText="SĐT: +84 286 286 2989"
        />
        <AboutRow
          iconPath={require("../../assets/icons/information-button.png")}
          mainText="Thông tin pháp lý"
        />
      </View>

      <View style={styles.underPart}>
        <Text style={styles.versionText}>Version 1.0.0 © Newsarea 2023. All Rights Reserved.</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.bottomIcons} source={require('../../assets/icons/facebook.png')}/>
          <Image style={styles.bottomIcons} source={require('../../assets/icons/instagram.png')}/>
          <Image style={styles.bottomIcons} source={require('../../assets/icons/youtube.png')}/>
          <Image style={styles.bottomIcons} source={require('../../assets/icons/linkedin.png')}/>
        </View>
      </View>
    </View>
  );
};

export default AboutPart;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  upperPart: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#AFAFAF'
  },
  aboutRow: {
    paddingVertical: 7
  },
  icon: {
    width: 21,
    height: 21,
    marginHorizontal: 10,
    marginVertical: 2
  },
  mainText: {
    color: '#292929',
    fontSize: 16,
    marginLeft: 5
  },
  subText: {
    color: '#797979',
    fontSize: 12,
    paddingLeft: 46,
    lineHeight: 26
  },
  bottomIcons: {
    width: 19,
    height: 19,
    marginRight: 20
  },
  versionText: {
    color: '#797979',
    marginVertical: 18
  }
});
