import { View, Text } from "native-base";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Onboarding } from "..";
import { OnboardingStackParamList } from "@/Navigation";
type OnboardingScreenProp = StackNavigationProp<OnboardingStackParamList>;
const SecondScreen: React.FC<{}> = ({}) => {
  const navigation = useNavigation<OnboardingScreenProp>();
  return (
    <View p="4">
      <Text>Second Screen</Text>
      <Button
        title="Go to third screen"
        onPress={() => navigation.navigate(Onboarding.THIRD)}
      />
    </View>
  );
};
export default SecondScreen;
