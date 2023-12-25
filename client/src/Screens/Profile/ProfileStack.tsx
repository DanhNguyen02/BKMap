import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import { ChangePassword } from "./ChangePassword";

const Stack = createNativeStackNavigator<any>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileDetail"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileDetail" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};