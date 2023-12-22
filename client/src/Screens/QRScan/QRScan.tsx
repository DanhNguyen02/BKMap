import { View, Text, Box, HStack } from "native-base";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal";
import { Camera } from 'expo-camera';

export default function QRScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`${data}`);
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
          toggleModal();
        }}
      >
        <HStack space='2'>
          <Image style={styles.erricon} source={require('../../../assets/images/QRScan/qr.png')}/>
          <Text style={styles.buttonText}>Scan QR code</Text>
        </HStack>
        
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <TouchableWithoutFeedback onPress={() => toggleModal()}>
        <View style={styles.error}>
          <HStack space={2}>
            <Image style={styles.erricon} source={require('../../../assets/images/QRScan/erricon.png')} />
            <Box style={styles.errorBox}>
              <Text style={styles.errorText}
              >Code is not supported. Try another one</Text>
            </Box>
          </HStack>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  cameraContainer: {
    width: '100%',
    aspectRatio: 1,
    paddingBottom: 40,
    position: 'absolute',
    top: Dimensions.get("screen").height/7,
  },
  camera: {
    aspectRatio: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#22668D',
    padding: 10,
    position: 'absolute',
    borderRadius: 20,
    bottom: Dimensions.get("window").height/7,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    marginTop: 10,
    padding: 10,
  },
  error: {
    backgroundColor: '#FFCC70',
    width: Dimensions.get("window").width/1.3,
    height: Dimensions.get("window").height/7,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Dimensions.get("window").height/2,
    left: Dimensions.get("window").width/14,
    borderRadius: 20,
  },
  errorBox: {
    flex: 1,
    backgroundColor: '#FF9263',
    borderRadius: 20,
    height: Dimensions.get("window").height/7 - 10,
    marginRight: 10,
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 12,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  erricon: {
    marginTop: 10,
    marginLeft: 10,
  }
});
