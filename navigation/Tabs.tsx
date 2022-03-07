import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { BG_BLACK, ACC_GRAY, ACC_PURPLE, BG_WHITE } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: isDark ? BG_BLACK : BG_WHITE }}
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: { backgroundColor: isDark ? BG_BLACK : BG_WHITE },
        tabBarActiveTintColor: ACC_PURPLE,
        tabBarInactiveTintColor: ACC_GRAY,
        headerTitleStyle: { color: ACC_PURPLE },
        headerStyle: {
          backgroundColor: isDark ? BG_BLACK : BG_WHITE,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginTop: 7,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"tv-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
