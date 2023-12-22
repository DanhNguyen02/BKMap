import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceDetail from "../Explore/PlaceDetail";
import QRScan from "./QRScan";
const Stack = createNativeStackNavigator<any>();

export const QRStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="QRScan"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="QRScan" component={QRScan} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
    </Stack.Navigator>
  );
};
