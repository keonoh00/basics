import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { Movie, TV } from "../api";
import Poster from "./Poster";
import Rating from "./Rating";

const MovieView = styled.View`
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
  fullData: Movie | TV;
}

const HorizontalMedia: React.FC<HorizontalMediaProps> = ({
  id,
  posterPath,
  originalTitle,
  voteAverage,
  fullData,
}) => {
  const isDark = useColorScheme() === "dark";
  const navigation = useNavigation();
  const goToDetail = () => {
    //@ts-ignore
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        ...fullData,
      },
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <MovieView key={id}>
        <Poster path={posterPath} />
        <Title isDark={isDark}>
          {originalTitle.slice(0, 9)}
          {originalTitle.length > 9 ? "..." : null}
        </Title>
        <Rating score={voteAverage} />
      </MovieView>
    </TouchableOpacity>
  );
};

export default HorizontalMedia;
