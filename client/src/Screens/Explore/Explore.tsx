import { TBuildingData } from "@/Localization/Type";
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
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { buildings } from "../../../assets/data/markercoord";

const Explore: React.FC<{}> = () => {
  const [buildings, setBuildings] = useState<TBuildingData[]>([]);

  useEffect(() => {
    getBuildings();
  }, []);

  async function getBuildings() {
    const response = await fetch("https://bkmap-service.onrender.com/area", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Error occured");
      return;
    }

    const listBuildings = await response.json();
    setBuildings(listBuildings);
  }

  const navigation: NavigationProp<any> = useNavigation();

  function PairBuildings(indexPair: number) {
    return (
      <HStack space={2} justifyContent={"center"}>
        <Box style={styles.area} key={buildings[indexPair * 2].id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: buildings[indexPair * 2],
              })
            }
            key={buildings[indexPair * 2].id}
          >
            <Image
              alt="1"
              source={{ uri: buildings[indexPair * 2].image }}
              w="56"
              h="32"
              borderTopRadius="10"
            ></Image>
            <Text style={styles.text}>{buildings[indexPair * 2].title}</Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.area} key={buildings[indexPair * 2 + 1].id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: buildings[indexPair * 2 + 1],
              })
            }
            key={buildings[indexPair * 2 + 1].id}
          >
            <Image
              alt="2"
              source={{ uri: buildings[indexPair * 2 + 1].image }}
              w="56"
              h="32"
              borderTopRadius="10"
            ></Image>
            <Text style={styles.text}>
              {buildings[indexPair * 2 + 1].title}
            </Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    );
  }

  function SingleBuilding(indexPair: number) {
    return (
      <HStack key={indexPair} space={2}>
        <Box style={styles.area} key={buildings[indexPair * 2].id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: buildings[indexPair * 2],
              })
            }
            key={buildings[indexPair * 2].id}
          >
            <Image
              alt="1"
              source={{ uri: buildings[indexPair * 2].image }}
              w="56"
              h="32"
              borderTopRadius="10"
            ></Image>
            <Text style={styles.text}>{buildings[indexPair * 2].title}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    );
  }

  function ListBuildings() {
    const pairs = [];
    for (let i = 0; i < Math.floor(buildings.length / 2); i++) {
      pairs.push(PairBuildings(i));
    }
    if (buildings.length % 2 != 0)
      pairs.push(SingleBuilding(buildings.length - 1));
    return (
      <VStack space={3} style={styles.areaBox}>
        {pairs}
      </VStack>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore area</Text>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search.." />
      </View>
      {buildings.length === 0 ? (
        <View style={{ paddingTop: 30 }}>
          <ActivityIndicator size={"large"} color="#22668D" />
          <Text>Loading</Text>
        </View>
      ) : (
        <ScrollView>
          <ListBuildings />
        </ScrollView>
      )}
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
    marginBottom: 50,
  },
  area: {
    width: "49%",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    // borderColor: "#C2C2C2",
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

export default Explore;
