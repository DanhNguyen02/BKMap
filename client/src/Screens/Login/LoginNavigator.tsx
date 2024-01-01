import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Login";
import { ForgotPassAsking } from "./ForgotPassAsking";
import { CreateAccountInformation } from "./CreateAccountInformation";
import { CreateAccountVerify } from "./CreateAccountVerify";
import { CreateAccountFinish } from "./CreateAccountFinish";
import { ForgotPassNewPass } from "./ForgotPassNewPass";
import { ForgotPassVerify } from "./ForgotPassVerify";


const Stack = createNativeStackNavigator<any>();

export const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
          name={"Login"}
          component={Login}
        />
      <Stack.Screen
          name={"ForgotPassAsking"}
          component={ForgotPassAsking}
        />
        <Stack.Screen
          name={"ForgotPassVerify"}
          component={ForgotPassVerify}
        />
        <Stack.Screen
          name={"ForgotPassNewPass"}
          component={ForgotPassNewPass}
        />
        <Stack.Screen
          name={"CreateAccountInformation"}
          component={CreateAccountInformation}
        />
        <Stack.Screen
          name={"CreateAccountVerify"}
          component={CreateAccountVerify}
        />
        <Stack.Screen
          name={"CreateAccountFinish"}
          component={CreateAccountFinish}
        />
    </Stack.Navigator>
  );
};