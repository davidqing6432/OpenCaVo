import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#1D6700",
    width: 150,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  icons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
});

export default styles;
