import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";
import Realm from "realm";
import AppLoading from "expo-app-loading";
import { DBContext } from "./context";
import { setTestDeviceIDAsync } from "expo-ads-admob";

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await setTestDeviceIDAsync("EMULATOR");
    const connection = await Realm.open({
      path: "diaryReactNativeDB",
      schema: [FeelingSchema],
    });
    setRealm(connection);
  };
  if (!ready) {
    return (
      <AppLoading
        onError={console.error}
        startAsync={startLoading}
        onFinish={onFinish}
      />
    );
  }
  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
