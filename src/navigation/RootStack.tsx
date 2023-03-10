import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import ImageScreen from "../screens/Image/ImageScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";

type RootStackParamList = {
  Image: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
