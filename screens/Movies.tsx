import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  useColorScheme,
} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import HorizontalMedia from "../components/HorizontalMedia";
import VerticalMedia from "../components/VerticalMedia";
import { useQueryClient, useQuery } from "react-query";
import { Movie, MovieResponse, moviesAPI } from "../api";

const VerticalSpacer = styled.View`
  height: 15px;
`;

const HorizontalSpacer = styled.View`
  width: 20px;
`;

const TrendingScroll = styled.FlatList`
  margin-top: 10px;
  margin-bottom: 10px;
` as unknown as typeof FlatList;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TrendingTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 17px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 10px;
`;

const ListContainer = styled.View``;

const ComingSoonTitle = styled(TrendingTitle)<{ isDark: boolean }>`
  margin-bottom: 10px;
  margin-top: 20px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const isDark = useColorScheme() === "dark";
  const queryClient = useQueryClient();
  const {
    isLoading: nowPlayingLoading,
    data: nowPlayingData,
    isRefetching: isRefetchingNowPlaying,
  } = useQuery<MovieResponse>(
    // Below string is for caching, it works over different components
    ["movies", "nowPlaying"],
    moviesAPI.getNowPlaying
  );
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: isRefetchingTrending,
  } = useQuery<MovieResponse>(["movies", "trending"], moviesAPI.getTrending);
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    isRefetching: isRefetchingUpcoming,
  } = useQuery<MovieResponse>(["movies", "upcoming"], moviesAPI.getUpcoming);
  const onRefresh = async () => {
    queryClient.refetchQueries(["movies"]);
  };

  const loading = nowPlayingLoading || trendingLoading || upcomingLoading;
  const refreshing =
    isRefetchingNowPlaying || isRefetchingTrending || isRefetchingUpcoming;
  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : upcomingData ? (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={
        <>
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
            {nowPlayingData?.results.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path || ""}
                originalTitle={movie.original_title}
                posterPath={movie.poster_path || ""}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
          <ListContainer>
            <TrendingTitle isDark={isDark}>Trending Movies</TrendingTitle>
            {trendingData ? (
              <TrendingScroll
                data={trendingData.results}
                horizontal
                keyExtractor={(item) => item.id + ""}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                ItemSeparatorComponent={HorizontalSpacer}
                renderItem={({ item }) => (
                  <HorizontalMedia
                    id={item.id}
                    posterPath={item.poster_path || ""}
                    originalTitle={item.original_title}
                    voteAverage={item.vote_average}
                  />
                )}
              />
            ) : null}
          </ListContainer>
          <ComingSoonTitle isDark={isDark}>Coming Soon</ComingSoonTitle>
        </>
      }
      data={upcomingData.results}
      keyExtractor={(item) => item.id + ""}
      ItemSeparatorComponent={VerticalSpacer}
      renderItem={({ item }) => (
        <VerticalMedia
          key={item.id}
          id={item.id}
          posterPath={item.poster_path || ""}
          originalTitle={item.original_title}
          releaseDate={item.release_date}
          overview={item.overview}
        />
      )}
    />
  ) : null;
};

export default Movies;
