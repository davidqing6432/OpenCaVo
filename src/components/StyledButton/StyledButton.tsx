import { Pressable, Text } from "react-native";
import styles from "./styles";

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
