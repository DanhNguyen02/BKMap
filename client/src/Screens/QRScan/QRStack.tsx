import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceDetail from "../Explore/PlaceDetail";
import QRScan from "./QRScan";
import Explore from "../Explore/Explore";
const Stack = createNativeStackNavigator<any>();

export const QRStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="QRScan"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="QRScan" component={QRScan} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
      <Stack.Screen name="ExploreAll" component={Explore} />
    </Stack.Navigator>
  );
};
