import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Animated } from "react-native";

const CoinContainer = styled(Animated.createAnimatedComponent(View))`
  flex: 1;
  align-items: center;
  background-color: lightslategray;
  padding: 15px 0px;
  border-radius: 10px;
  margin: 5px;
  border-width: 1px;
  border-color: azure;
`;

const CoinSymbol = styled.Text`
  color: white;
  font-weight: 600;
`;

const CoinIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const CoinRender = ({ symbol, index }: { symbol: string; index: number }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  return (
    <CoinContainer style={{ opacity, transform: [{ scale }] }}>
      <CoinIcon
        source={{
          uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
        }}
      />
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinContainer>
  );
};

export default CoinRender;
