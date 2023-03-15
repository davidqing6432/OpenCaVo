import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";
import { RootStackScreenProps } from "../../navigation/RootStack";
import globalStyles from "../../globalStyles";
import StyledButton from "../../components/StyledButton/StyledButton";

export default function AddMemberScreen({
  navigation,
}: RootStackScreenProps<"AddMember">) {
  const [image, setImage] = useState({ uri: "./assets/images/avocado.png" });
  const [name, setName] = useState("");
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
  const handleInputChange = (name: string) => setName(name);
  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Add Member</Text>
      <View style={styles.imageSelect}>
        <Image source={require("../../../assets/images/avocado.png")} />
        <StyledButton
          text="Select an image"
          pressFunction={async () => await pickImage()}
        />
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter member's name"
          onChangeText={(text) => handleInputChange(text)}
        />
      </View>
      <StyledButton
        text="Add member"
        pressFunction={() => navigation.navigate("Welcome")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
