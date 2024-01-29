import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Dimensions, FlatList, useColorScheme } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import VerticalMedia from "../components/VerticalMedia";
import { useQueryClient, useQuery, useInfiniteQuery } from "react-query";
import { MovieResponse, moviesAPI } from "../api";
import Loader from "../components/Loader";
import HorizontalList from "../components/HorizontalList";

const VerticalSpacer = styled.View`
  height: 15px;
`;

const ComingSoonTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 17px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const isDark = useColorScheme() === "dark";
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const { isLoading: nowPlayingLoading, data: nowPlayingData } =
    useQuery<MovieResponse>(
      // Below string is for caching, it works over different components
      ["movies", "nowPlaying"],
      moviesAPI.getNowPlaying
    );
  const { isLoading: trendingLoading, data: trendingData } =
    useQuery<MovieResponse>(["movies", "trending"], moviesAPI.getTrending);
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<MovieResponse>(
    ["movies", "upcoming"],
    moviesAPI.getUpcoming,
    {
      getNextPageParam: (currentPage) => {
        const nextPage = currentPage.page + 1;
        return nextPage > currentPage.total_pages ? null : nextPage;
      },
    }
  );
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["movies"]);
    setRefreshing(false);
  };
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const loading = nowPlayingLoading || trendingLoading || upcomingLoading;
  return loading ? (
    <Loader />
  ) : upcomingData ? (
    <FlatList
      style={{ marginBottom: 30 }}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={loadMore}
      ListHeaderComponent={
        <>
          <Swiper
            loop
            horizontal
            autoplay
            autoplayTimeout={3.5}
            showsPagination={false}
            showsButtons={false}
            containerStyle={{
              width: "100%",
              height: SCREEN_HEIGHT / 5,
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
                fullData={movie}
              />
            ))}
          </Swiper>
          {trendingData ? (
            <HorizontalList
              title={"Trending Movies"}
              data={trendingData.results}
            />
          ) : null}
          <ComingSoonTitle isDark={isDark}>Coming Soon</ComingSoonTitle>
        </>
      }
      data={upcomingData.pages.map((page) => page.results).flat()}
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
          fullData={item}
        />
      )}
    />
  ) : null;
};

export default Movies;
