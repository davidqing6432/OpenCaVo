import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import AddMemberScreen from "../screens/AddMember/AddMemberScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import AttendanceScreen from "../screens/Attendance/AttendanceScreen";

type RootStackParamList = {
  AddMember: undefined;
  Welcome: undefined;
  Attendance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AddMember" component={AddMemberScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
