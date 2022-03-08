import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  useColorScheme,
} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import HorizontalMedia from "../components/HorizontalMedia";
import VerticalMedia from "../components/VerticalMedia";
import { Movie } from "../api";

// **********************************************************************************
// This file is not used but just to compare using FLATLIST and SCROLLVIEW Components
// **********************************************************************************

const API_KEY = "98efb7e246733262fc6a43e9555c4feb";

const ScrollView = styled.ScrollView`
  margin-bottom: 20px;
`;

const TrendingScroll = styled.ScrollView`
  margin-top: 10px;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;

const ListContainer = styled.View`
  margin-bottom: 20px;
`;

const ComingSoonTitle = styled(ListTitle)<{ isDark: boolean }>`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };
  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      <Swiper
        loop
        horizontal
        autoplay
        showsPagination={false}
        showsButtons={false}
        containerStyle={{
          width: "100%",
          height: SCREEN_HEIGHT / 5,
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
            // fullData is used in detail page which is used in FlatList version
            fullData={movie}
          />
        ))}
      </Swiper>
      <ListContainer>
        <ListTitle isDark={isDark}>Trending Movies</ListTitle>
        <TrendingScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
        >
          {trending.map((movie) => (
            <HorizontalMedia
              id={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
              voteAverage={movie.vote_average}
              // fullData is used in detail page which is used in FlatList version
              fullData={movie}
            />
          ))}
        </TrendingScroll>
        <ComingSoonTitle isDark={isDark}>Coming Soon</ComingSoonTitle>
        {upcoming.map((movie) => (
          <VerticalMedia
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            // fullData is used in detail page which is used in FlatList version
            fullData={movie}
          />
        ))}
      </ListContainer>
    </ScrollView>
  );
};

export default Movies;
