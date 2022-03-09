import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

const View = styled.View`
  flex: 1;
  padding: 0px 40px;
  padding-top: 80px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 34px;
  margin-bottom: 100px;
  font-weight: 600;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: 30px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => (
  <View>
    <Title>My Journal</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);
export default Home;
