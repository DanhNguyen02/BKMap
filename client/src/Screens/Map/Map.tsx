import { View, Text } from "native-base";
import MapView from "react-native-maps";
import React, { useEffect, useState } from "react";
import { TBuildingData } from "@/Localization/Type";
import BuildingMarker from "./Marker";
import { ActivityIndicator } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
const initialRegion = {
  latitude: 10.77278,
  longitude: 106.65972,
  latitudeDelta: 0.0015,
  longitudeDelta: 0.0025,
};
const baseURL = "https://bkmap-service.onrender.com/area";
const Map: React.FC<{}> = ({}) => {
  const [data, setData] = useState<TBuildingData[]>([]);
  const [ref, setRef] = useState<MapView | null>();
  useEffect(() => {
    const fetchMap = async () => {
      try {
        const response = await fetch(baseURL);
        const fetchData: TBuildingData[] = await response.json();
        setData(fetchData);
      } catch (e) {
        console.log("Error: ", e);
      }
    };
    fetchMap();
  }, []);
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
      {data.length === 0 ? (
        <View pt="72" alignItems={"center"} justifyContent={"center"}>
          <View>
            <ActivityIndicator size={"large"} color="#22668D" />
            <Text fontSize={"lg"}>Loading</Text>
          </View>
        </View>
      ) : (
        <MapView
          initialRegion={initialRegion}
          style={{ width: "100%", height: "100%" }}
          showsBuildings={false}
          ref={(ref) => setRef(ref)}
          provider={PROVIDER_GOOGLE}
        >
          {data.map((point: TBuildingData) => {
            return <BuildingMarker position={point} key={point.id} />;
          })}
        </MapView>
      )}
    </View>
  );
};

export default Map;
