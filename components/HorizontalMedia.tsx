import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
import Poster from "./Poster";
import Rating from "./Rating";

const Movie = styled.View`
  margin-right: 10px;
  align-items: center;
`;

const TrendingScroll = styled.ScrollView`
  margin-top: 10px;
`;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

interface HorizontalMediaProps {
  movies: any;
}

const HorizontalMedia: React.FC<HorizontalMediaProps> = ({ movies }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <TrendingScroll
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
    >
      {movies.map((movie: any) => (
        <Movie key={movie.id}>
          <Poster path={movie.poster_path} />
          <Title isDark={isDark}>
            {movie.original_title.slice(0, 9)}
            {movie.original_title.length > 9 ? "..." : null}
          </Title>
          <Rating score={movie.vote_average} />
        </Movie>
      ))}
    </TrendingScroll>
  );
};

export default HorizontalMedia;
