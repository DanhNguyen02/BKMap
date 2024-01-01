import { TBuildingData } from "@/Localization/Type";
import { Modal, View, Text, Image, Button } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Marker } from "react-native-maps";
const BuildingMarker: React.FC<{ position: TBuildingData }> = ({
  position,
}) => {
  const navigation: NavigationProp<any> = useNavigation();
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
      >
        <Modal isOpen={isModalVisible} onClose={() => showModal()}>
          <Modal.Content w="72" backgroundColor={"white"}>
            <Modal.CloseButton backgroundColor={"white"} borderRadius={"20"} />

            <View borderRadius="6" alignItems={"center"} pb="4">
              <Image
                alignItems={"center"}
                source={{ uri: position.image }}
                alt={position.title}
                w="72"
                h="56"
                borderTopRadius="8"
              />
              <Text
                py="2"
                textAlign={"center"}
                fontSize="xl"
                fontWeight={"bold"}
              >
                {position.title}
              </Text>
              <Text fontSize={"lg"} px="1">
                {position.description}
              </Text>
              <Button
                backgroundColor={"#22668D"}
                mt="2"
                onPress={() =>
                  navigation.navigate("Explore", {
                    screen: "PlaceDetail",
                    params: {
                      buildingInfo: position,
                    },
                  })
                }
              >
                <Text fontSize={"lg"} color="white">
                  Chi tiết
                </Text>
              </Button>
            </View>
          </Modal.Content>
        </Modal>
      </Marker>
    </View>
  );
};

export default BuildingMarker;
