import { View, Image } from "react-native";
import styles from "./styles";

type propTypes = {
  name: string;
  imageSrc: any;
};

export default function MemberCard({ name, imageSrc }: propTypes) {
  return (
    <View>
      <Image style={styles.image} source={imageSrc} />
    </View>
  );
}
