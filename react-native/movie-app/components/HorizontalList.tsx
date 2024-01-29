import React from "react";
import { FlatList, useColorScheme } from "react-native";
import styled from "styled-components/native";
import HorizontalMedia from "./HorizontalMedia";

const ListTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 17px;
  font-weight: 600;
  margin: 0px 0px 15px 20px;
`;

export const HorizontalListSeparator = styled.View`
  width: 20px;
`;

const ListContainer = styled.View`
  margin-top: 30px;
`;

interface HorizontalListProps {
  title: string;
  data: any[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ title, data }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <ListContainer>
      <ListTitle isDark={isDark}>{title}</ListTitle>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id + ""}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={HorizontalListSeparator}
        renderItem={({ item }) => (
          <HorizontalMedia
            id={item.id}
            posterPath={item.poster_path}
            originalTitle={item.original_name ?? item.original_title}
            voteAverage={item.vote_average}
            fullData={item}
          />
        )}
      />
    </ListContainer>
  );
};

export default HorizontalList;
