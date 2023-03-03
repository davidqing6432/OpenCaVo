import { View, Text } from "react-native";
import { RootStackScreenProps } from "../../navigation/homeStack";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}
