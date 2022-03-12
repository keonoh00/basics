import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { coins } from "../api";
import CoinRender from "../components/CoinRender";

const Container = styled.View``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface CoinProps {
  rank: number;
  is_active: boolean;
  is_new: boolean;
  name: string;
  symbol: string;
}

const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter(
          (coin: CoinProps) => coin.rank != 0 && coin.is_active && !coin.is_new
        )
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator size="large" color="black" />
      </Loader>
    );
  }
  return (
    <Container>
      <FlatList
        data={data}
        numColumns={3}
        contentContainerStyle={{ padding: 10 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <CoinRender id={item.id} index={index} symbol={item.symbol} />
        )}
      />
    </Container>
  );
};

export default Home;
