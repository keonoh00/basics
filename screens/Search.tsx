import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { moviesAPI, tvAPI } from "../api";
import { ACC_GRAY, ACC_PURPLE } from "../colors";
import HorizontalList from "../components/HorizontalList";
import Loader from "../components/Loader";

const Container = styled.ScrollView``;
const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  font-weight: 400;
  border-radius: 15px;
  margin: 25px auto -5px auto;
  width: 90%;
  align-self: center;
`;
const Search = () => {
  const [query, setQuery] = useState("");
  const onChangeText = (text: string) => setQuery(text);
  const {
    isLoading: movieSearching,
    data: movieData,
    refetch: movieSearch,
  } = useQuery(["searchMovies", query], moviesAPI.search, { enabled: false });
  const {
    isLoading: tvSearching,
    data: tvData,
    refetch: tvSearch,
  } = useQuery(["searchTV", query], tvAPI.search, { enabled: false });
  const onSubmit = () => {
    if (query == "") {
      return;
    }
    movieSearch();
    tvSearch();
  };
  return (
    <Container>
      <SearchBar
        placeholder={"Search for Movie of TV Show"}
        placeholderTextColor={ACC_GRAY}
        returnKeyType={"search"}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {movieSearching || tvSearching ? <Loader /> : null}
      {movieData ? (
        <HorizontalList data={movieData.results} title={"Movies Results:"} />
      ) : null}
      {tvData ? (
        <HorizontalList data={tvData.results} title={"TV Results:"} />
      ) : null}
    </Container>
  );
};

export default Search;
