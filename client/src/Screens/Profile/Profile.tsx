import { View, Text, Image, Box, HStack } from "native-base";
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [notification, setNotification] = useState(true);
  const pressNoti = () => { setNotification(!notification) }

  const [language, setLanguage] = useState(true);
  const pressLanguage = () => { setLanguage(!language) }

  const [theme, setTheme] = useState(true);
  const pressTheme = () => { setTheme(!theme) }

  const navigation = useNavigation<any>();
  const navigateChanePassword = () => navigation.navigate("ChangePassword");

  return (
    <View 
      p="4"
      style={{
        
      }}
    >
      <Box
        style={{
          alignItems: 'center'
        }} 
      >
        <Image
          alt="1"
          source={require("../../../assets/images/Explore/messi-world-cup.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginTop: 100,
          }}
        ></Image>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >
          Lionel Messi
        </Text>
      </Box>
      <Box>
        <Box style={styles.box}>
          <HStack space={2} style={styles.row}>
            <AntDesign name="profile" size={24} color="black" />
            <Text style={styles.text}>Edit profile information</Text>
          </HStack>
          <HStack space={2} style={styles.row}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.text}>Notifications</Text>
            <TouchableOpacity style={styles.buttonPress} onPress={pressNoti}>
              <Text style={ {color: '#1573FE' }}>{notification === true ? 'ON' : 'OFF'}</Text>
            </TouchableOpacity>
          </HStack>
          <HStack space={2} style={styles.row}>
            <Entypo name="language" size={24} color="black" />
            <Text style={styles.text}>Language</Text>
            <TouchableOpacity style={styles.buttonPress} onPress={pressLanguage}>
              <Text style={ {color: '#1573FE' }}>{language === true ? 'English' : 'Vietnamese'}</Text>
            </TouchableOpacity>
          </HStack>
        </Box>
        <Box style={styles.box}>
          <HStack space={2} style={styles.row}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TouchableOpacity onPress={navigateChanePassword}>
              <Text style={styles.text}>Change password</Text>
            </TouchableOpacity>
          </HStack>
          <HStack space={2} style={styles.row}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
            <Text style={styles.text}>Theme</Text>
            <TouchableOpacity style={styles.buttonPress} onPress={pressTheme}>
              <Text style={ {color: '#1573FE' }}>{theme === true ? 'Light mode' : 'Dark mode'}</Text>
            </TouchableOpacity>
          </HStack>
        </Box>
        <Box style={styles.box}>
          <HStack space={2} style={styles.row}>
            <AntDesign name="profile" size={24} color="black" />
            <Text style={styles.text}>Help & Support</Text>
          </HStack>
          <HStack space={2} style={styles.row}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.text}>Notifications</Text>
          </HStack>
          <HStack space={2} style={styles.row}>
            <AntDesign name="lock" size={24} color="black" />
            <Text style={styles.text}>Privacy</Text>
          </HStack>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2
    },
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  row: {
    padding: 5,
    position: 'relative'
  },
  text: {
    paddingLeft: 5
  },
  buttonPress: {
    position: 'absolute',
    right: 10,
    top: 5
  }
})

export default Profile;
