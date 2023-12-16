import { View, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import React, { useEffect, useState } from "react";
const initialRegion = {
  latitude: 10.77278,
  longitude: 106.65972,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.0025,
};
const boundingBox = [
  {
    latitude: "24.234631",
    longitude: "89.907127",
  },
  {
    latitude: "24.259769",
    longitude: "89.934692",
  },
];
// 10.773541529445358, 106.66177802738684 NE
// 10.775228433786824, 106.65694491489644 SW
// 10.77383757627138, 106.65954342364007 CE
const Map = () => {
  const [ref, setRef] = useState<MapView | null>();
  useEffect(() => {
    ref &&
      ref.setMapBoundaries(
        {
          latitude: 10.776517793008956,
          longitude: 106.66146865267542,
        },
        {
          latitude: 10.770978333374156,
          longitude: 106.65725147819549,
        }
      );
  }, [ref]);
  return (
    <View>
      <Text p="4">Map</Text>
      <MapView
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
        showsBuildings={false}
        ref={(ref) => setRef(ref)}
        zoomEnabled={false}
      />
    </View>
  );
};

export default Map;
