import { Modal, View, Text } from "native-base";
import React, { useState } from "react";
import { Marker } from "react-native-maps";
export type TBuildingData = {
  id: number;
  latitude: number;
  longitude: number;
};
const BuildingMarker: React.FC<{ position: TBuildingData }> = ({
  position,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Marker
        coordinate={{
          latitude: position.latitude,
          longitude: position.longitude,
        }}
        pinColor="red"
        onPress={() => showModal()}
      />
      <Modal isOpen={isModalVisible} onClose={() => showModal()}>
        <View>
          <Text>{position.id}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default BuildingMarker;
