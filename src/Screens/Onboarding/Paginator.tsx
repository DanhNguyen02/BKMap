import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";
import React from "react";

type TData = {
  id: number;
  title: string;
  description: string;
  image: number;
};
const Paginator: React.FC<{ data: TData[]; scrollX: Animated.Value }> = ({
  data,
  scrollX,
}) => {
  const width = useWindowDimensions().scale;
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 30],
          extrapolate: "clamp",
        });
        return <View style={[styles.dot, { width: dotWidth }]} key={i}></View>;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 8,
  },
});

export default Paginator;
