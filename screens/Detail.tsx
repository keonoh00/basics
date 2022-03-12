import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { coinInfo, coinPrice } from "../api";
import { CoinIcon } from "../components/CoinRender";
import { VictoryChart, VictoryLine, VictoryScatter } from "victory-native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: azure;
`;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <CoinIcon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
      ),
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    coinInfo
  );
  const { isLoading: priceLoading, data: priceData } = useQuery(
    ["coinPrice", id, "30m"],
    coinPrice
  );
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (priceData) {
      setChartData(
        priceData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        }))
      );
    }
  }, [priceData]);
  return (
    <Container>
      {infoLoading || priceLoading || chartData === [] ? null : (
        <VictoryChart height={360}>
          <VictoryLine
            interpolation="monotoneX"
            data={chartData}
            style={{
              data: { stroke: "#1572A1" },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
          <VictoryScatter
            data={chartData}
            style={{
              data: { fill: "#4D77FF" },
            }}
          />
        </VictoryChart>
      )}
    </Container>
  );
};

export default Detail;
