import React from "react";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Nav = createNativeStackNavigator();

const InNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen
        name="Detail"
        component={Detail}
        options={{ presentation: "modal" }}
      />
    </Nav.Navigator>
  );
};

export default InNav;
