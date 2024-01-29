import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { Props } from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Title = styled.Text``;
const JoinContainer = styled.View``;
const JoinText = styled.Text``;
const JoinBtn = styled.TouchableOpacity``;

const Login = ({ navigation: { navigate } }) => {
  const onJoinPress = () => {
    navigate("Join");
  };
  return (
    <Container>
      <Title>Login</Title>
      <JoinContainer>
        <JoinText>
          Don't Have an Account?
          <JoinBtn>
            <JoinText onPress={onJoinPress}>Join Now!</JoinText>
          </JoinBtn>
        </JoinText>
      </JoinContainer>
    </Container>
  );
};

export default Login;
