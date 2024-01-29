import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { Movie, TV } from "../api";
import Poster from "./Poster";

const VerticalMovie = styled.View`
  padding: 0 20px;
  flex-direction: row;
`;

const VerticalMovieColumn = styled.View`
  margin-left: 10px;
  width: 90%;
  max-height: 100%;
`;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
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
  id: number;
  posterPath: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
  fullData: Movie | TV;
}

const VerticalMedia: React.FC<HorizonatalMovieProps> = ({
  id,
  posterPath,
  originalTitle,
  releaseDate,
  overview,
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
    </TouchableOpacity>
  );
};

export default VerticalMedia;
