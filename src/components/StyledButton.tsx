import { Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {},
  text: { fontFamily: "Avenir" },
});

type propTypes = {
  text: string;
  pressFunction: () => void;
};

export default function StyledButton({ text, pressFunction }: propTypes) {
  return (
    <Pressable onPress={pressFunction} style={styles.buttonContainer}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
