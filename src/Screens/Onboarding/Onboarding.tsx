import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
//import { slides } from "../../../assets/data/onboarding";
import { Slide } from '@/Localization/Type'

const slides: Slide[] = [
  {
      id: 1,
      title: 'Tìm thông tin',
      description: 'về các khu vực tại trường Đại học Bách khoa, ĐHQG TPHCM',
      image: require('../../../assets/images/Onboarding/onboarding_1.png')
  },
  {
      id: 2,
      title: 'Quét mã QR',
      description: 'để biết thông tin về nơi bạn đang đứng',
      image: require('../../../assets/images/Onboarding/onboarding_2.png')
  },
  {
      id: 3,
      title: 'Tìm vị trí',
      description: 'khu vực mà bạn muốn đến',
      image: require('../../../assets/images/Onboarding/onboarding_3.png')
  }
]

export const Onboarding = () => {
  const renderItem: React.FC<{ item: Slide }> = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FlatList to render onboarding items */}
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
