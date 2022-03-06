import React from "react";
import { useColorScheme } from "react-native";
import styled from "styled-components/native";
import Poster from "./Poster";

const VerticalMovie = styled.View`
  padding: 0 30px;
  flex-direction: row;
  margin-bottom: 5px;
`;

const VerticalMovieColumn = styled.View`
  margin-left: 10px;
  width: 90%;
`;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Overview = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 12px;
  width: 80%;
  margin-top: 5px;
`;

const ReleaseDate = styled(Overview)<{ isDark: boolean }>`
  font-size: 10px;
`;

interface HorizonatalMovieProps {
  id: string;
  posterPath: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
}

const VerticalMedia: React.FC<HorizonatalMovieProps> = ({
  id,
  posterPath,
  originalTitle,
  releaseDate,
  overview,
}) => {
  const isDark = useColorScheme() === "dark";
  return (
    <VerticalMovie>
      <Poster path={posterPath} />
      <VerticalMovieColumn>
        <Title isDark={isDark}>{originalTitle}</Title>
        <ReleaseDate isDark={isDark}>
          {new Date(releaseDate).toLocaleDateString("ko")}
        </ReleaseDate>
        <Overview isDark={isDark}>
          {overview !== "" && overview.length > 150
            ? `${overview.slice(0, 150)}...`
            : overview}
        </Overview>
      </VerticalMovieColumn>
    </VerticalMovie>
  );
};

export default VerticalMedia;
