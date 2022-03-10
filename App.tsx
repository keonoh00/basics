import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import auth from "@react-native-firebase/auth";

export default function App() {
  useEffect(() => {
    console.log(auth().currentUser);
  }, []);
  return <View></View>;
}
