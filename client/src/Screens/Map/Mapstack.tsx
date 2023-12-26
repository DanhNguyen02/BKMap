import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceDetail from "../Explore/PlaceDetail";
import Map from "../Map/Map";
import Explore from "../Explore/Explore";
const Stack = createNativeStackNavigator<any>();

export const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
      {/* <Stack.Screen name="ExploreAll" component={Explore} /> */}
    </Stack.Navigator>
  );
};
