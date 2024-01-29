import React, { useRef } from "react";
import { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";

const Container = styled.View``;

const UserInputContainer = styled.View`
  padding-top: 10px;
`;

const EmailInput = styled.TextInput`
  background-color: grey;
  padding: 15px;
  margin: 10px 20px;
  border-radius: 20px;
`;

const PasswordInput = styled(EmailInput)``;

const JoinBtn = styled.TouchableOpacity`
  border-width: 1px;
  padding: 10px;
  border-radius: 20px;
  margin: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const JoinBtnText = styled.Text``;

const Join = () => {
  const passwordInputRef = useRef<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitEmail = () => {
    passwordInputRef.current.focus();
  };
  const onSubmitPassword = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Please Complete the Form");
    }
    // Below if is for preventing user pressing twice
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
    } catch (e: any) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("Please provide stronger password");
        }
      }
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <Container>
      <UserInputContainer>
        <EmailInput
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={onSubmitEmail}
        />
        <PasswordInput
          ref={passwordInputRef}
          value={password}
          secureTextEntry
          placeholder="Password"
          returnKeyType="next"
          onSubmitEditing={onSubmitPassword}
          onChangeText={(text) => setPassword(text)}
        />
      </UserInputContainer>
      <JoinBtn onPress={onSubmitPassword}>
        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <JoinBtnText>Join Now</JoinBtnText>
        )}
      </JoinBtn>
    </Container>
  );
};

export default Join;
