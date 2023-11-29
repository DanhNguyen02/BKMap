import { OnboardingStackParamList } from "@/Navigation";
import { Text, View } from "native-base";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Onboarding } from "..";
type OnboardingScreenProp = StackNavigationProp<OnboardingStackParamList>;
const FirstScreen: React.FC<{}> = ({}) => {
  const navigation = useNavigation<OnboardingScreenProp>();
  return (
    <View p="4">
      <Text>FirstScreen</Text>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate(Onboarding.SECOND)}
      />
    </View>
  );
};
export default FirstScreen;
