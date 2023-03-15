import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F5F5F5",
    paddingVertical: 40,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    height: 160,
    justifyContent: "space-between",
  },
  heading: {
    textAlign: "center",
  },
  subheading: {
    textAlign: "center",
    color: "#1D6700",
    marginBottom: 200,
  },
});

export default styles;
