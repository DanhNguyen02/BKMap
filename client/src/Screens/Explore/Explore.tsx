import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  VStack,
  HStack,
  Box,
  Image,
  ScrollView,
} from "native-base";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { buildings } from "../../../assets/data/markercoord";

const Explore: React.FC<{}> = () => {
  const navigation: NavigationProp<any> = useNavigation();

  function PairBuildings(indexPair: number) {
    return (
      <HStack space={2}>
        <Box style={styles.area}>
          <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail", { buildingInfo: buildings[indexPair*2] })}>
            <Image
              alt="1"
              source={{ uri: buildings[indexPair*2].image }}
              style={styles.image}
            ></Image>
            <Text style={styles.text}>{buildings[indexPair*2].title}</Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.area}>
          <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail", { buildingInfo: buildings[indexPair*2+1] })}>
            <Image
              alt="2"
              source={{ uri: buildings[indexPair*2+1].image }}
              style={styles.image}
            ></Image>
            <Text style={styles.text}>{buildings[indexPair*2+1].title}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    )
  }

  function SingleBuilding (indexPair: number) {
    return (
      <HStack key={indexPair} space={2}>
        <Box style={styles.area}>
          <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail", { buildingInfo: buildings[indexPair*2] })}>
            <Image
              alt="1"
              source={{ uri: buildings[indexPair*2].image }}
              style={styles.image}
            ></Image>
            <Text style={styles.text}>{buildings[indexPair*2].title}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    )
  }

  function ListBuildings() {
    const pairs = []
    for (let i = 0; i < Math.floor(buildings.length/2); i++) {
      pairs.push(PairBuildings(i))
    }
    if (buildings.length % 2 != 0) pairs.push(SingleBuilding(buildings.length-1))
    return (
      <VStack style={styles.areaBox}>
        {pairs}
      </VStack>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore area</Text>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search.." />
      </View>
      <ScrollView>
        <ListBuildings />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  search: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C2C2C2",
  },
  input: {
    fontSize: 15,
  },
  areaBox: {
    padding: 10,
    marginBottom: 50
  },
  area: {
    width: "49%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: "#22668D",
  },
  image: {
    resizeMode: "contain",
    height: 120,
    paddingTop: 0,
    paddingBottom: 0,
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

export default Explore;
