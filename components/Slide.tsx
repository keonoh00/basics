import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import { makeImgPath } from "../utils";
import { BlurView } from "expo-blur";
import Poster from "./Poster";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../api";

const BgImg = styled.Image``;

const Title = styled.Text<{ isDark: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? "white" : "black")};
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 40%;
  margin-left: 10px;
`;

const Overview = styled.Text<{ isDark: boolean }>`
  margin-top: 10px;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0,0,0,0.8)"};
  font-size: 10px;
`;

const Votes = styled(Overview)`
  margin-top: 5px;
`;

interface SlideProps {
  backdropPath: string;
  originalTitle: string;
  posterPath: string;
  voteAverage: number;
  overview: string;
  fullData: Movie;
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  originalTitle,
  posterPath,
  voteAverage,
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
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={{ flex: 1 }}>
        <BgImg
          style={StyleSheet.absoluteFill}
          source={{ uri: makeImgPath(backdropPath) }}
        />
        <BlurView
          tint={isDark ? "dark" : "light"}
          intensity={70}
          style={StyleSheet.absoluteFill}
        >
          <Wrapper>
            <Poster path={posterPath} />
            <Column>
              <Title isDark={isDark}>{originalTitle}</Title>
              {voteAverage > 0 ? (
                <Votes isDark={isDark}>⭐️{voteAverage}/10</Votes>
              ) : null}
              <Overview isDark={isDark}>{overview.slice(0, 90)}...</Overview>
            </Column>
          </Wrapper>
        </BlurView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Slide;
