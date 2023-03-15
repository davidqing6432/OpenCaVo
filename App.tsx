import { useFonts } from "expo-font";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Public-Sans": require("./assets/fonts/PublicSans.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <RootStack />;
}
