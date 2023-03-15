import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import StyledButton from "../../components/StyledButton/StyledButton";
import styles from "./styles";
import globalStyles from "../../globalStyles";
import { RootStackScreenProps } from "../../navigation/RootStack";

export default function AttendanceScreen({
  navigation,
}: RootStackScreenProps<"Attendance">) {
  const [image, setImage] = useState({ uri: "./assets/images/avocado.png" });
  const pickImage = async () => {
    let result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })) as ImagePicker.ImagePickerResult;

    const source = { uri: result.assets![0].uri };
    setImage(source);
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Take Attendance</Text>
      <View style={styles.imageSelect}>
        <Image source={require("../../../assets/images/avocado.png")} />
        <StyledButton
          text="Select an image"
          pressFunction={async () => await pickImage()}
        />
      </View>
      <StyledButton
        text="Take Attendance"
        pressFunction={() => navigation.navigate("Welcome")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
