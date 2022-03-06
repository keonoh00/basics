import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, useColorScheme } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Poster from "../components/Poster";
import Slide from "../components/Slide";

const API_KEY = "98efb7e246733262fc6a43e9555c4feb";

const ScrollView = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
`;

const Container = styled.View``;

const Movie = styled.View`
  margin-right: 10px;
`;

const TrendingScroll = styled.ScrollView`
  margin-top: 20px;
`;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Votes = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 10px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: { navigate },
}) => {
  const [loading, setLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trending, setTrending] = useState([]);
  const isDark = useColorScheme() === "dark";
  const getTrending = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      )
    ).json();
    setTrending(results);
  };
  const getUpcoming = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setUpcoming(results);
  };
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json();
    setNowPlayingMovies(results);
  };
  const getData = async () => {
    await Promise.all([getTrending(), getNowPlaying(), getUpcoming()]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container>
      <ScrollView>
        <Swiper
          loop
          horizontal
          autoplay
          showsPagination={false}
          showsButtons={false}
          containerStyle={{
            width: "100%",
            height: SCREEN_HEIGHT / 6,
            marginBottom: 20,
          }}
        >
          {nowPlayingMovies.map((movie) => (
            <Slide
              key={movie.id}
              backdropPath={movie.backdrop_path}
              originalTitle={movie.original_title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </Swiper>
        <ListTitle isDark={isDark}>Trending Movies</ListTitle>
      </ScrollView>
      <TrendingScroll
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
      >
        {trending.map((movie) => (
          <Movie key={movie.id}>
            <Poster path={movie.poster_path} />
            <Title isDark={isDark}>
              {movie.original_title.slice(0, 8)}
              {movie.original_title.length > 8 ? "..." : null}
            </Title>
            <Votes isDark={isDark}>⭐️{movie.vote_average}/10</Votes>
          </Movie>
        ))}
      </TrendingScroll>
    </Container>
  );
};

export default Movies;
