import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { tvAPI } from "../api";
import HorizontalList from "../components/HorizontalList";
import Loader from "../components/Loader";

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading: todayLoading, data: todayData } = useQuery(
    ["tv", "today"],
    tvAPI.getAiringToday
  );
  const { isLoading: topLoading, data: topData } = useQuery(
    ["tv", "top"],
    tvAPI.getTopRated
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tv", "trending"],
    tvAPI.getTrending
  );
  const loading = todayLoading || topLoading || trendingLoading;
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };
  return loading ? (
    <Loader />
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <HorizontalList title={"Today OnAir"} data={todayData.results} />
      <HorizontalList title={"Top Rated👍"} data={topData.results} />
      <HorizontalList title={"Trending"} data={trendingData.results} />
    </ScrollView>
  );
};

export default Tv;
