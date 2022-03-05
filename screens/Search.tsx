import react from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Search = () => (
  <StyledView>
    <StyledText>Search</StyledText>
  </StyledView>
);

export default Search;
