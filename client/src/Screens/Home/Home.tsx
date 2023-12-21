import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { HStack, VStack, Box } from "native-base";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>HOME</Text>
      <Image source={require("../../../assets/images/Home/home_01.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to HCMUT</Text>
      <VStack space={2} alignItems='center'>
        <Box style={styles.textblock001} backgroundColor="#D9D9D9">
          <Text style={styles.text} >Một trong bốn trường đại học tại Việt Nam 
            được công nhận đạt chất lượng kiểm định 
            cơ sở giáo dục theo tiêu chuẩn HCERES, Châu Âu</Text>
        </Box>
        <HStack space={2}>
          <Box style={styles.textblock} backgroundColor="#FFD2D2">
            <Text style={styles.text}>52 chương trình đào tạo được công nhận đạt chuẩn 
            bởi các tổ chức kiểm định uy tín trên thế giới</Text>
          </Box>
          <Box style={styles.textblock} backgroundColor="#B5D7FF">
            <Text style={styles.text}>867 bài báo khoa học công nghệ được đăng 
              trên các tạp chí quốc tế uy tín quốc tế (Năm 2022)</Text>
          </Box>
        </HStack>
        <HStack space={2}>
          <Box style={styles.textblock} backgroundColor="#FFF8D0">
            <Text style={styles.text}>23.000 sinh viên các hệ đào tạo</Text>
          </Box>
          <Box style={styles.textblock} backgroundColor="#C9FFD2">
            <Text style={styles.text}>157 đối tác trên toàn thế giới</Text>
          </Box>
        </HStack>
      </VStack>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
  },
  home: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  logo: {
    flex: 0.7,
    width: "100%",
    resizeMode: 'contain',
  },
  title: {
    flex: 0,
    fontSize: 25,
    color:  "#DA0E0E",
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  textblock001: {
    flex: 0,
    alignItems: "center",
    borderRadius: 20,
    flexWrap: 'wrap',
    padding: 10,
    width: Dimensions.get("window").width - 50,
  },
  textblock: {
    flex: 0,
    alignItems: "center",
    borderRadius: 20,
    flexWrap: 'wrap',
    padding: 10,
    width: Dimensions.get("window").width / 2 - 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
