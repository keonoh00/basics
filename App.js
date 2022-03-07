import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

// Need to restart Metro server after new packages are installed
export default function App() {
  const [assets] = useAssets([require("./sample.jpg")]);
  const [loaded, error] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === "dark";
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
