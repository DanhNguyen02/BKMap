import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  Image,
  HStack,
  Box,
  Button,
} from "native-base";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { TBuildingData } from "@/Localization/Type";
import { Ionicons, Feather } from "@expo/vector-icons";

const PlaceDetail: React.FC<{ buildingInfo?: TBuildingData; route: any }> = ({
  route,
  buildingInfo,
}) => {
  const navigation: NavigationProp<any> = useNavigation();
  const data: TBuildingData = route.params.buildingInfo;
  const returnOldScreen = () => {
    if (route.params.hasOwnProperty("oldInfo"))
      navigation.navigate("PlaceDetail", {
        buildingInfo: route.params.oldInfo,
      });
    else navigation.navigate("ExploreAll");
  };

  function PairRooms(indexPair: number) {
    return (
      <HStack key={indexPair} space={2} p="2" justifyContent={"center"}>
        <Box
          w="48"
          borderColor="#22668D"
          borderWidth={"1"}
          p="2"
          borderRadius="6"
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: data.rooms[indexPair * 2],
                oldInfo: data,
              })
            }
          >
            <Image
              alt="2"
              source={{ uri: data.rooms[indexPair * 2].image }}
              style={styles.roomImage}
            ></Image>
            <Text style={styles.text}>{data.rooms[indexPair * 2].title}</Text>
          </TouchableOpacity>
        </Box>
        <Box
          w="48"
          borderColor="#22668D"
          borderWidth={"1"}
          p="2"
          borderRadius="6"
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: data.rooms[indexPair * 2],
                oldInfo: data,
              })
            }
          >
            <Image
              alt="2"
              source={{ uri: data.rooms[indexPair * 2].image }}
              style={styles.roomImage}
            ></Image>
            <Text style={styles.text}>{data.rooms[indexPair * 2].title}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    );
  }

  function SingleRoom(indexPair: number) {
    return (
      <HStack key={indexPair} space={2} p="2" justifyContent={"center"}>
        <Box
          w="48"
          borderColor="#22668D"
          borderWidth={"1"}
          p="2"
          borderRadius="6"
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                buildingInfo: data.rooms[indexPair * 2],
                oldInfo: data,
              })
            }
          >
            <Image
              alt="2"
              source={{ uri: data.rooms[indexPair * 2].image }}
              style={styles.roomImage}
            ></Image>
            <Text style={styles.text}>{data.rooms[indexPair * 2].title}</Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    );
  }

  function ListRooms() {
    const pairs = [];
    for (let i = 0; i < Math.floor(data.rooms.length / 2); i++) {
      pairs.push(PairRooms(i));
    }
    if (data.rooms.length % 2 != 0)
      pairs.push(SingleRoom(data.rooms.length - 1));
    return (
      <Box>
        <Text fontSize="20" p="5" fontWeight="bold">
          Danh sách phòng đặc biệt
        </Text>
        <Box>{pairs}</Box>
      </Box>
    );
  }

  function ListComments() {
    let comments = data.comments;
    return (
      <Box style={styles.listComments}>
        {comments?.map((comment) => (
          <HStack space={2} style={styles.userComment}>
            <Image
              alt="1"
              source={require("../../../assets/images/Explore/messi-world-cup.jpg")}
              style={styles.avatar}
            ></Image>
            <Box style={styles.boxComment}>
              <Text style={styles.comment}>{comment.content}</Text>
            </Box>
          </HStack>
        ))}
      </Box>
    );
  }

  return (
    <View backgroundColor={"white"} pb="20">
      <Text
        fontSize="20"
        fontWeight={"bold"}
        textAlign={"center"}
        py="4"
        borderBottomColor={"gray.300"}
        borderBottomWidth="1"
      >
        {data.title}
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 15,
          top: 15,
        }}
        onPress={returnOldScreen}
      >
        <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Image alt="1" source={{ uri: data.image }} h="72"></Image>
        <Text fontSize={"lg"} p="4" textAlign="center">
          {data.description}
        </Text>
        {data.hasOwnProperty("rooms") ? <ListRooms /> : <></>}
        <HStack space={2} style={styles.userComment}>
          <Image
            alt="1"
            source={require("../../../assets/images/Explore/messi-world-cup.jpg")}
            style={styles.avatar}
          ></Image>
          <View style={styles.commentInput}>
            <TextInput
              style={styles.input}
              placeholder="Viết bình luận của bạn..."
            />
          </View>
          <Button>
            <Feather name="send" size={24} color="white" />
          </Button>
        </HStack>
        <Text style={styles.commentHeader}>Nhận xét</Text>
        <ListComments />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    textAlign: "center",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  area: {
    // width: "49%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: "#22668D",
  },
  text: {
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  roomImage: {
    height: 120,
  },
  commentHeader: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  userComment: {
    padding: 20,
    display: "flex",
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  commentInput: {
    padding: 10,
    marginLeft: 10,
    flexDirection: "row",
    width: "68%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#22668D",
  },
  input: {
    fontSize: 15,
    paddingLeft: 10,
  },
  listComments: {
    marginBottom: 50,
  },
  boxComment: {
    backgroundColor: "#FFF",
    width: "78%",
    marginLeft: 10,
    borderRadius: 50,
    borderColor: "#22668D",
    borderWidth: 1,
  },
  comment: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingLeft: 20,
  },
});

export default PlaceDetail;
