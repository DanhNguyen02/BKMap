import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, View } from "native-base";
import { ExploreStack } from "@/Screens/Explore/ExploreStack";
import { QRStack } from "@/Screens/QRScan/QRStack";
import { ProfileStack } from "@/Screens/Profile/ProfileStack";
import { MapStack } from "@/Screens/Map/Mapstack";
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Location") {
            iconName = focused ? "location" : "location-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = focused ? "compass" : "compass-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#22668D",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: "absolute",
        },
        tabBarShowLabel: false,
        // tabBarLabelStyle: {
        //   fontSize: 16,
        // },
      })}
    >
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{ tabBarLabel: "ExploreStack" }}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({}) => (
            <View
              backgroundColor={"#22668D"}
              w="16"
              h="16"
              bottom={4}
              borderRadius={100}
              display={"flex"}
              justifyContent={"center"}
              p="3.5"
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={35}
                color="white"
              />
            </View>
          ),
        }}
        component={QRStack}
        // children={() => <QRScan navigation={navigation} />}
      />
      <Tab.Screen name="Location" component={MapStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};
