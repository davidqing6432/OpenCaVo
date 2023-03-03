import { View, Text, Button } from "react-native";
import { RootStackScreenProps } from "../../navigation/homeStack";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  return (
    <View>
      <Text>Hello!</Text>
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate("Image")}
      />
    </View>
  );
}
