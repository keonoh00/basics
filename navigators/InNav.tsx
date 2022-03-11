import React from "react";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

const InNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Home" component={Home} />
    </Nav.Navigator>
  );
};

export default InNav;
