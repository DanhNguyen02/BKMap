import { View, Text, Box, HStack, Button } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { Camera } from "expo-camera";
import { RootScreens } from "..";
import { TBuildingData, TData } from "@/Localization/Type";
import { buildings } from "../../../assets/data/markercoord";
const QRScan: React.FC<{}> = ({}) => {
  const navigation: NavigationProp<any> = useNavigation();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // do something - for example: reset states, ask for camera permission
      setScanned(false);
      setHasPermission(false);
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const connect = (data: string) => {
    if (data.includes("bkmap")) 
    {
      data = data.substring(data.indexOf(":") + 1);
      if (1 <= Number(data) && Number(data) <= 22) {
        const buildingInfo: TBuildingData = buildings[Number(data) - 1];
        Alert.alert("Kết quả", `Đây là ${buildingInfo.title}`, [
        {
          text: "Tìm hiểu về tòa nhà",
          onPress: () =>
            navigation.navigate("PlaceDetail", { buildingInfo: buildingInfo }),
        },
        {
          text: "Cancel",
        }
        ]);
      }
      else {
        toggleModal();
      }
    }
    else {
      toggleModal();
    }
    // console.log(buildingInfo);
    
  };
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    connect(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setScanned(false);
        }}
      >
        <HStack space="2">
          <Image
            style={styles.erricon}
            source={require("../../../assets/images/QRScan/qr.png")}
          />
          <Text style={styles.buttonText}>Scan QR code</Text>
        </HStack>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <TouchableWithoutFeedback onPress={() => toggleModal()}>
          <View style={styles.error}>
            <HStack space={2}>
              <Image
                style={styles.erricon}
                source={require("../../../assets/images/QRScan/erricon.png")}
              />
              <Box style={styles.errorBox}>
                <Text style={styles.errorText}>
                  Code is not supported. Try another one
                </Text>
              </Box>
            </HStack>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
export default QRScan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 1,
    paddingBottom: 40,
    position: "absolute",
    top: Dimensions.get("screen").height / 7,
  },
  camera: {
    aspectRatio: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#22668D",
    padding: 10,
    position: "absolute",
    borderRadius: 20,
    bottom: Dimensions.get("window").height / 7,
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    marginTop: 10,
    padding: 10,
  },
  error: {
    backgroundColor: "#FFCC70",
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 7,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 2,
    left: Dimensions.get("window").width / 14,
    borderRadius: 20,
  },
  errorBox: {
    flex: 1,
    backgroundColor: "#FF9263",
    borderRadius: 20,
    height: Dimensions.get("window").height / 7 - 10,
    marginRight: 10,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 12,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  erricon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
