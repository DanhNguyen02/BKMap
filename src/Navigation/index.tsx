import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { Onboarding, RootScreens } from "@/Screens";
import FirstScreen from "@/Screens/Onboarding/firstScreen";
import SecondScreen from "@/Screens/Onboarding/secondScreen";
import ThirdScreen from "@/Screens/Onboarding/thirdScreen";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.ONBOARDING]: undefined;
};
export type OnboardingStackParamList = {
  [Onboarding.FIRST]: undefined;
  [Onboarding.SECOND]: undefined;
  [Onboarding.THIRD]: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingScreen = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName={Onboarding.FIRST}
      screenOptions={{ headerShown: false }}
    >
      <OnboardingStack.Screen name={Onboarding.FIRST} component={FirstScreen} />
      <OnboardingStack.Screen
        name={Onboarding.SECOND}
        component={SecondScreen}
      />
      <OnboardingStack.Screen name={Onboarding.THIRD} component={ThirdScreen} />
    </OnboardingStack.Navigator>
  );
};
// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar /> */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingScreen}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
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
