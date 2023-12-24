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
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <MapView
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
        showsBuildings={false}
        ref={(ref) => setRef(ref)}
      >
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773238746328245,
            longitude: 106.65960321447547,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa KTXD */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773629088257646,
            longitude: 106.65889886691099,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa MT */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.77351706895672,
            longitude: 106.66077937697757,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa Moi Truong */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773618917457584,
            longitude: 106.66051443462327,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa QLCN */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773949537189104,
            longitude: 106.66119729409864,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa KHUD */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773154357831288,
            longitude: 106.65879596430831,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa CNVL */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.775121262570615,
            longitude: 106.66032678033399,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa KTGT */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.775398587529782,
            longitude: 106.6601557895161,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa Dien-DienTu*/ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.772553929986783,
            longitude: 106.65847622929877,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa Co Khi */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.774338633960381,
            longitude: 106.6602928567519,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Khoa KTHH */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.772090240646936,
            longitude: 106.65944806084154,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* C1 Xuong Co Khi */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.774712645032313,
            longitude: 106.6593824745971,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* A1 */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.772696918508725,
            longitude: 106.66011770497981,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* A2 */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773127324084262,
            longitude: 106.66017627562293,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* A4 */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.77341321441384,
            longitude: 106.6600093081139,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Trung tam ngoai ngu*/ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.775760408678423,
            longitude: 106.66023333413904,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Ho Ca */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.772198500949976,
            longitude: 106.65840703453672,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* San Van Dong */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.772661358192673,
            longitude: 106.65939140954688,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Cafeteria */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.775442877031614,
            longitude: 106.65969836941792,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* Food Court */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.773527620704261,
            longitude: 106.65875344632589,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* San bong ro */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.774598982405308,
            longitude: 106.65995956211835,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* San bong chuyen */ }
        <Marker
          style={{ position: "absolute" }}
          coordinate={{
            latitude: 10.774241925551202,
            longitude: 106.65997230604457,
          }}
          pinColor="red"
          onPress={() => showModal()}
        />
        {/* <BuildingMarker position={api} /> */}
      </MapView>

      <Modal isOpen={isModalVisible} onClose={() => showModal()}>
        <View>
          <Text>hehehaha</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Map;
