import React, { useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { Animated } from "react-native";
import Detail from "../screens/Detail";

const CoinContainer = styled(Animated.createAnimatedComponent(View))`
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

export const CoinIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const CoinRender = ({
  symbol,
  index,
  id,
}: {
  symbol: string;
  index: number;
  id: string;
}) => {
  const navigation = useNavigation();
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
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate("Detail", { symbol, id })}
    >
      <CoinContainer style={{ opacity, transform: [{ scale }] }}>
        <CoinIcon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
        <CoinSymbol>{symbol}</CoinSymbol>
      </CoinContainer>
    </TouchableOpacity>
  );
};

export default CoinRender;
