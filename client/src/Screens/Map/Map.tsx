import { View, Text, Modal } from "native-base";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { TBuildingData } from "@/Localization/Type";
import { buildings } from "../../../assets/data/markercoord";
import BuildingMarker from "./Marker";
const initialRegion = {
  latitude: 10.77278,
  longitude: 106.65972,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.0025,
};
const Map: React.FC<{}> = ({}) => {
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
  const api = {
    latitude: 10.773238746328245,
    longitude: 106.65960321447547,
    id: 1,
  };
  const data = buildings;
  return (
    <View>
      <MapView
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
        showsBuildings={false}
        ref={(ref) => setRef(ref)}
      >
        {data.map((point: TBuildingData) => {
          return <BuildingMarker position={point} key={point.id} />;
        })}
      </MapView>
    </View>
  );
};

export default Map;
