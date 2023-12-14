import { View, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

const Map = () => {
  return (
    <View p="4">
      <Text p="4">Map</Text>
      <MaterialCommunityIcons name="qrcode-scan" size={34} color="black" />
    </View>
  );
};

export default Map;
