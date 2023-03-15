import { View, Text } from "react-native";
import MemberCard from "../../components/MemberCard/MemberCard";
import StyledButton from "../../components/StyledButton/StyledButton";
import globalStyles from "../../globalStyles";
import { RootStackScreenProps } from "../../navigation/RootStack";
import styles from "./styles";

export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.h1, styles.heading]}>Welcome to AvoCaVo.</Text>
      <Text style={[globalStyles.text, styles.subheading]}>
        Facial recognition using OpenCV.
      </Text>
      <View style={styles.buttons}>
        <StyledButton
          text="Add a new member"
          pressFunction={() => navigation.navigate("AddMember")}
        />
        <StyledButton
          text="Take attendance"
          pressFunction={() => navigation.navigate("Attendance")}
        />
        <StyledButton
          text="List current members"
          pressFunction={() => navigation.navigate("AddMember")}
        />
      </View>
    </View>
  );
}
