import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, HStack, Box } from "native-base";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

const PlaceDetail = () => {
  const navigation: NavigationProp<any> = useNavigation()
  const handlePress = () => navigation.navigate("PlaceDetail")

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toà nhà A3</Text>
      <ScrollView>
        <Image alt="1" source={require("../../../assets/images/Home/home_01.png")} style={styles.image}></Image>
        <Text style={styles.description}>Đây là văn phòng khoa Khoa học và Kỹ thuật Máy tính.</Text>
        <Text style={styles.header}>Danh sách phòng đặc biệt</Text>
        <HStack space={2}>
          <Box style={styles.area}>
            <TouchableOpacity onPress={handlePress}>
              <Image alt="1" source={require("../../../assets/images/Explore/computerguy.png")} style={styles.roomImage}></Image>
              <Text style={styles.text}>Toà nhà A3</Text>
            </TouchableOpacity>
          </Box>
          <Box style={styles.area}>
            <TouchableOpacity onPress={handlePress}>
              <Image alt="2" source={require("../../../assets/images/Explore/computerguy.png")} style={styles.roomImage}></Image>
              <Text style={styles.text}>Toà nhà A3</Text>
            </TouchableOpacity>
          </Box>
        </HStack>
        <Text style={styles.commentHeader}>Nhận xét</Text>
        <HStack space={2} style={styles.userComment}>
          <Image alt="1" source={require("../../../assets/images/Explore/messi-world-cup.jpg")} style={styles.avatar}></Image>
          <View style={styles.commentInput}>
            <TextInput style={styles.input} placeholder="Viết bình luận của bạn..."/>
          </View>
        </HStack>
        <Box style={styles.listComments}>
          <HStack space={2} style={styles.userComment}>
            <Image alt="1" source={require("../../../assets/images/Explore/messi-world-cup.jpg")} style={styles.avatar}></Image>
            <Box style={styles.boxComment}>
              <Text style={styles.comment}>Comment nặng nề quá</Text>
            </Box>
          </HStack>
          <HStack space={2} style={styles.userComment}>
            <Image alt="1" source={require("../../../assets/images/Explore/messi-world-cup.jpg")} style={styles.avatar}></Image>
            <Box style={styles.boxComment}>
              <Text style={styles.comment}>Comment nặng nề quá</Text>
            </Box>
          </HStack>
        </Box>
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
  image: {
    height: 250
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20
  },
  area: {
    width: '49%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: '#22668D',
  },
  text: {
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  roomImage: {
    height: 120
  },
  commentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  userComment: {
    padding: 20,
    display: 'flex'
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  commentInput: {
    padding: 10,
    marginLeft: 20,
    flexDirection: 'row',
    width: '78%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#22668D'
  },
  input: {
    fontSize: 15,
    paddingLeft: 10
  },
  listComments: {
    paddingTop: 20,
    marginBottom: 50
  },
  boxComment: {
    backgroundColor: '#FFF',
    width: '78%',
    marginLeft: 20,
    borderRadius: 50,
    borderColor: '#22668D',
    borderWidth: 1
  },
  comment: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    paddingLeft: 20
  }
})

export default PlaceDetail;
