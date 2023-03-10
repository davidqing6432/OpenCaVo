import { View, Text, Button } from "react-native";
import StyledButton from "../../components/StyledButton";
import globalStyles from "../../globalStyles";
import { RootStackScreenProps } from "../../navigation/RootStack";

export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  return (
    <View>
      <Text style={globalStyles.h1}>Welcome to AvoCaVo.</Text>
      <Text style={globalStyles.text}>Facial recognition using OpenCV.</Text>
      <StyledButton
        text="Add a new member"
        pressFunction={() => navigation.navigate("Image")}
      />
      <StyledButton
        text="Take attendance"
        pressFunction={() => navigation.navigate("Image")}
      />
      <StyledButton
        text="List current members"
        pressFunction={() => navigation.navigate("Image")}
      />
    </View>
  );
}
