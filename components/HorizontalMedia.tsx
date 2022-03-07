import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
import Poster from "./Poster";
import Rating from "./Rating";

const Movie = styled.View`
  align-items: center;
`;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

interface HorizontalMediaProps {
  id: number;
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
}

const HorizontalMedia: React.FC<HorizontalMediaProps> = ({
  id,
  posterPath,
  originalTitle,
  voteAverage,
}) => {
  const isDark = useColorScheme() === "dark";
  return (
    <Movie key={id}>
      <Poster path={posterPath} />
      <Title isDark={isDark}>
        {originalTitle.slice(0, 9)}
        {originalTitle.length > 9 ? "..." : null}
      </Title>
      <Rating score={voteAverage} />
    </Movie>
  );
};

export default HorizontalMedia;
