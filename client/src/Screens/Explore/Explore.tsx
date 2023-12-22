import { View, Text } from "native-base";
import React from "react";

const Explore: React.FC<{ data?: string }> = ({ data }) => {
  return (
    <View p="4">
      <Text>Explore</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default Explore;
