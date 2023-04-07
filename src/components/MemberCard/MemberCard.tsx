import { View, Image, Text, ImageSourcePropType } from "react-native";
import Icon from "../../../assets/icons";
import globalStyles from "../../globalStyles";
import styles from "./styles";

type propTypes = {
  name: string;
  imageSrc: ImageSourcePropType;
};

export default function MemberCard({ name, imageSrc }: propTypes) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={globalStyles.text}>{name}</Text>
      <View style={styles.icons}>
        <Icon type="delete_icon" />
        <Icon type="edit_icon" />
      </View>
    </View>
  );
}
