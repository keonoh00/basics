import React from "react";

const BASE_URL = "https://api.coinpaprika.com/v1";
const COINS_URL = `${BASE_URL}/coins`;

export const coins = () => fetch(COINS_URL).then((response) => response.json());

export const coinInfo = ({ queryKey }) =>
  fetch(`${COINS_URL}/${queryKey[1]}`).then((response) => response.json());

export const coinPrice = ({ queryKey }) =>
  fetch(
    `${BASE_URL}/tickers/${queryKey[1]}/historical?start=${
      new Date().toISOString().split("T")[0]
    }&interval=${queryKey[2]}`
  ).then((response) => response.json());
