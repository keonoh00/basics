import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Share,
  Platform,
} from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { Movie, moviesAPI, TV, tvAPI } from "../api";
import { BG_BLACK, BG_WHITE } from "../colors";
import Loader from "../components/Loader";
import Poster from "../components/Poster";
import { makeImgPath } from "../utils";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Header = styled.View`
  height: ${SCREEN_HEIGHT / 5}px;
  justify-content: flex-end;
  padding: 10px 20px;
`;
const Background = styled.Image``;

const Title = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 34px;
  align-self: flex-end;
  font-weight: 500;
  margin: 0px 15px 15px 15px;
`;

const Column = styled.View`
  flex-direction: row;
  width: 80%;
`;
const Overview = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin: 20px 0px;
  padding: 0 20px;
`;

const VideoBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
`;
const VideoBtnText = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-weight: 600;
  line-height: 24px;
  margin: auto;
  margin-left: 10px;
`;

const Data = styled.View``;

type RootStackParamList = {
  // ScreenName : type
  Detail: Movie | TV;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">;

const Detail: React.FC<DetailScreenProps> = ({
  navigation: { setOptions, goBack },
  route: { params },
}) => {
  const isMovie = "original_title" in params;
  const { isLoading, data } = useQuery(
    [isMovie ? "Movie" : "tv", params.id],
    isMovie ? moviesAPI.detail : tvAPI.detail
  );
  const isDark = useColorScheme() === "dark";
  const openYTLink = async (id) => {
    const YouTubeURL = `https://m.youtube.com/watch?v=${id}`;
    await WebBrowser.openBrowserAsync(YouTubeURL);
  };
  const ShareMedia = async () => {
    const isAndroid = Platform.OS === "android";
    const sharingURL = isMovie
      ? `https://www.imdb.com/title/${data.imdb_id}`
      : data.homepage;
    if (isAndroid) {
      await Share.share({
        message: `${params.overview}\nCheck it Out: ${sharingURL}`,
      });
    } else {
      await Share.share({
        url: sharingURL,
        title: isMovie ? params.original_title : params.original_name,
      });
    }
  };
  const ShareButton = () => (
    <TouchableOpacity onPress={ShareMedia}>
      <Ionicons
        name="share-outline"
        color={isDark ? "white" : "black"}
        size={24}
      />
    </TouchableOpacity>
  );
  const BackButton = () => (
    <TouchableOpacity onPress={() => goBack()}>
      <Ionicons
        name="chevron-back"
        color={isDark ? "white" : "black"}
        size={24}
      />
    </TouchableOpacity>
  );
  useEffect(() => {
    setOptions({
      title: isMovie ? "Movie" : "TV Show",
      headerRight: () => <ShareButton />,
      headerLeft: () => <BackButton />,
    });
  });
  useEffect(() => {
    if (data) {
      setOptions({
        headerRight: () => <ShareButton />,
      });
    }
  }, [data]);
  return (
    <Container>
      <Header>
        <Background
          style={StyleSheet.absoluteFill}
          source={{ uri: makeImgPath(params.backdrop_path || "") }}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", isDark ? BG_BLACK : BG_WHITE]}
        />
        <Column>
          <Poster path={params.poster_path || ""} />
          <Title isDark={isDark}>
            {isMovie ? params.original_title : params.original_name}
          </Title>
        </Column>
      </Header>
      {isLoading ? <Loader /> : null}
      <Data>
        <Overview isDark={isDark}>{params.overview}</Overview>
        {data?.videos?.results?.map((video) => (
          <VideoBtn key={video.key} onPress={() => openYTLink(video.key)}>
            <Ionicons
              name="logo-youtube"
              size={28}
              color={isDark ? "white" : "black"}
            />
            <VideoBtnText isDark={isDark}>{video.name}</VideoBtnText>
          </VideoBtn>
        ))}
      </Data>
    </Container>
  );
};

export default Detail;
