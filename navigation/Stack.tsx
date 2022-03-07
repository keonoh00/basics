import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { ACC_PURPLE } from "../colors";

const ToSearch: React.FC<NativeStackScreenProps<any, "Search">> = ({
  navigation: { navigate },
}) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
    <Text>Go to Search Tab</Text>
  </TouchableOpacity>
);
const ScreenTwo: React.FC<NativeStackScreenProps<any, "Withdraw">> = ({
  navigation: { navigate },
}) => (
  <TouchableOpacity onPress={() => navigate("Withdraw")}>
    <Text>Withdraw</Text>
  </TouchableOpacity>
);
const Withdraw: React.FC<NativeStackScreenProps<any, any>> = ({
  navigation: { goBack },
}) => (
  <TouchableOpacity onPress={() => goBack()}>
    <Text>Go back</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: ACC_PURPLE,
    }}
  >
    <NativeStack.Screen name="Search" component={ToSearch} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen
      name="Withdraw"
      component={Withdraw}
      options={{ presentation: "modal", animation: "fade_from_bottom" }}
    />
  </NativeStack.Navigator>
);

export default Stack;
