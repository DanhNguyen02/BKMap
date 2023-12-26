import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { OnboardingContainer } from "@/Screens/Onboarding";
import { RootScreens } from "@/Screens";
import { Login } from "@/Screens/Login/Login";
import { ForgotPassAsking } from "@/Screens/Login/ForgotPassAsking";
import { ForgotPassVerify } from "@/Screens/Login/ForgotPassVerify";
import { ForgotPassNewPass } from "@/Screens/Login/ForgotPassNewPass";
import { CreateAccountInformation } from "@/Screens/Login/CreateAccountInformation";
import { CreateAccountVerify } from "@/Screens/Login/CreateAccountVerify";
import { CreateAccountFinish } from "@/Screens/Login/CreateAccountFinish";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.FORGOTPASSASKING]: undefined;
  [RootScreens.FORGOTPASSVERIFY]: undefined;
  [RootScreens.FORGOTPASSNEWPASS]: undefined;
  [RootScreens.CREATEACCOUNTINFORMATION]: undefined;
  [RootScreens.CREATEACCOUNTVERIFY]: undefined;
  [RootScreens.CREATEACCOUNTFINISH]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingContainer}
        />
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={Login}
        />
        <RootStack.Screen
          name={RootScreens.FORGOTPASSASKING}
          component={ForgotPassAsking}
        />
        <RootStack.Screen
          name={RootScreens.FORGOTPASSVERIFY}
          component={ForgotPassVerify}
        />
        <RootStack.Screen
          name={RootScreens.FORGOTPASSNEWPASS}
          component={ForgotPassNewPass}
        />
        <RootStack.Screen
          name={RootScreens.CREATEACCOUNTINFORMATION}
          component={CreateAccountInformation}
        />
        <RootStack.Screen
          name={RootScreens.CREATEACCOUNTVERIFY}
          component={CreateAccountVerify}
        />
        <RootStack.Screen
          name={RootScreens.CREATEACCOUNTFINISH}
          component={CreateAccountFinish}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
