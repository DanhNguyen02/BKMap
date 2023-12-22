import { NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, VStack, HStack, Box, Image, ScrollView } from "native-base";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import PlaceDetail from "./PlaceDetail";

const areas = [
  {
    id: 1,
    name: "Toà nhà A3"
  },
  {
    id: 2,
    name: "Toà nhà B3"
  },
  {
    id: 3,
    name: "Toà nhà B4"
  },
  {
    id: 4,
    name: "BK Food Court"
  }
]

const Explore = () => {
  const navigation: NavigationProp<any> = useNavigation()
  const handlePress = () => navigation.navigate("PlaceDetail")

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore area</Text>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search.."/>
      </View>
      <ScrollView>
        <VStack style={styles.areaBox}>
          <HStack space={2}>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="1" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="2" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack space={2}>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="1" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="2" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack space={2}>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="1" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="2" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
          </HStack>
          <HStack space={2}>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="1" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
            <Box style={styles.area}>
              <TouchableOpacity onPress={handlePress}>
                <Image alt="2" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
                <Text style={styles.text}>Toà nhà A3</Text>
              </TouchableOpacity>
            </Box>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  search: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C2C2C2'
  },
  input: {
    fontSize: 15
  },
  areaBox: {
    padding: 10
  },
  area: {
    width: '49%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: '#22668D',
  },
  image: {
    resizeMode: 'contain',
    height: 120,
    paddingTop: 0,
    paddingBottom: 0
  },
  text: {
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  }
})

export default Explore;
