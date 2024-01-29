import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";

const Votes = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 10px;
`;

interface RatingProps {
  score: number;
}

const Rating: React.FC<RatingProps> = ({ score }) => {
  const isDark = useColorScheme() === "dark";
  return score > 0 ? (
    <Votes isDark={isDark}>⭐️{score}/10</Votes>
  ) : (
    <Votes isDark={isDark}>Coming Soon</Votes>
  );
};

export default Rating;
