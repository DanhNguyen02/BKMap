import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./Explore";
import PlaceDetail from "./PlaceDetail";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator<any>();

export const ExploreStack = () => {
  const navigation = useNavigation<any>();

  // useEffect(() => {
  //   navigation.navigate("ExploreAll")
  // }, [])

  return (
    <Stack.Navigator initialRouteName="ExploreAll" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreAll" component={Explore}/>
      <Stack.Screen name="PlaceDetail" component={PlaceDetail}/>
    </Stack.Navigator>
  )
}