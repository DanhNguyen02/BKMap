import { View, Text, Modal } from "native-base";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import BuildingMarker from "./Marker";
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
  const api = {
    latitude: 10.773238746328245,
    longitude: 106.65960321447547,
    id: 1,
  };
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalVisible2, setIsModalVisible2] = useState<boolean>(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const showModal2 = () => {
    setIsModalVisible2(!isModalVisible2);
  };
  return (
    <View>
      <MapView
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
        showsBuildings={false}
        ref={(ref) => setRef(ref)}
      >
        {/* <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773238746328245,
            longitude: 106.65960321447547,
          }}
          pinColor="red"
          onPress={() => showModal()}
        >
          <Modal isOpen={isModalVisible} onClose={() => showModal()}>
            <View>
              <Text>hahah</Text>
            </View>
          </Modal>
        </Marker> */}
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773639328630587,
            longitude: 106.6592631953395,
          }}
          pinColor="red"
          onPress={() => showModal2()}
        >
          <Modal isOpen={isModalVisible2} onClose={() => showModal2()}>
            <View>
              <Text>another one</Text>
            </View>
          </Modal>
        </Marker>
        <BuildingMarker position={api} />
      </MapView>
    </View>
  );
};

export default Map;
