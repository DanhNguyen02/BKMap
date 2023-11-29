import React, { useRef } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { Text, Button, Image } from "native-base";
//import { slides } from "../../../assets/data/onboarding";
import { Slide } from "@/Localization/Type";
import { RootScreens } from "..";
const slides: Slide[] = [
  {
    id: 1,
    title: "Tìm thông tin",
    description: "về các khu vực tại trường Đại học Bách khoa, ĐHQG TPHCM",
    image: require("../../../assets/images/Onboarding/obd1.png"),
  },
  {
    id: 2,
    title: "Quét mã QR",
    description: "để biết thông tin về nơi bạn đang đứng",
    image: require("../../../assets/images/Onboarding/onboarding_2.png"),
  },
  {
    id: 3,
    title: "Tìm vị trí",
    description: "khu vực mà bạn muốn đến",
    image: require("../../../assets/images/Onboarding/onboarding_3.png"),
  },
];
export const Onboarding = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<null | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const gotoNextPage = () => {
    if (activeIndex + 1 < slides.length) {
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };
  const onViewRef = React.useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  });
  const renderItem: React.FC<{ item: Slide }> = ({ item }) => (
    <View style={styles.slide}>
      <View style={{ alignItems: "center" }}>
        <Image source={item.image} w="80" h="80" mt="16" alt={item.title} />
        <Text fontSize="28" bold color={"#818181"} mb="2" mt="4">
          {item.title}
        </Text>
        <Text fontSize="20" textAlign={"center"} color="#555">
          {item.description}
        </Text>
      </View>

      {item.id === 3 ? (
        <Button
          w="48"
          backgroundColor={"#22668D"}
          borderRadius={24}
          onPress={() => props.onNavigate(RootScreens.MAIN)}
        >
          <Text fontSize="xl" color={"white"}>
            Bắt đầu
          </Text>
        </Button>
      ) : (
        <Button
          w="48"
          backgroundColor={"#22668D"}
          borderRadius={24}
          onPress={() => gotoNextPage()}
        >
          <Text fontSize="xl" color={"white"}>
            Tiếp tục
          </Text>
        </Button>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <ExpandingDot
        data={slides}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.5}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        activeDotColor="#22668D"
        inActiveDotColor="#22668D"
        containerStyle={{
          bottom: 30,
        }}
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
    paddingTop: 16,
  },
  slide: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingHorizontal: 20,
    height: 700,
    justifyContent: "space-between",
  },
});
