import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { RootStackScreenProps } from "../../navigation/homeStack";

export default function ImageScreen({
  navigation,
}: RootStackScreenProps<"Image">) {
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
  // const curImage = require(image.uri);
  return (
    <View style={styles.container}>
      <Image source={require("./assets/images/avocado.png")} />
      <Button title="BUTTON!!!!"></Button>
      <Pressable style={styles.button} onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Select Image</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#222",
    padding: 5,
  },
  buttonText: {
    color: "#EEE",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },
});
