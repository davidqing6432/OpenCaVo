import { FlatList } from "react-native";
import MemberCard from "../../components/MemberCard/MemberCard";
import StyledButton from "../../components/StyledButton/StyledButton";
import { RootStackScreenProps } from "../../navigation/RootStack";
import Member from "../../types/Member";

export default function MemberList({
  navigation,
}: RootStackScreenProps<"MemberList">) {
  const defaultMember: Member = {
    name: "Default Member",
    image: require("../../../assets/images/avocado.png"),
  };
  const data: Member[] = [
    defaultMember,
    defaultMember,
    defaultMember,
    defaultMember,
    defaultMember,
    defaultMember,
    defaultMember,
  ];
  return (
    <>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <MemberCard name={item.name} imageSrc={item.image} />
        )}
      />
      <StyledButton
        text="Go to Welcome"
        pressFunction={() => navigation.navigate("Welcome")}
      />
    </>
  );
}
