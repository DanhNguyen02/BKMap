import { View, Text } from "native-base";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
const initialRegion = {
  latitude: 10.77278,
  longitude: 106.65972,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.0025,
};
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
      <MapView
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
        showsBuildings={false}
        ref={(ref) => setRef(ref)}
      >
        <Marker />
      </MapView>
    </View>
  );
};

export default Map;
