import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDB } from "../context";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";

const View = styled.View`
  flex: 1;
  padding: 0px 20px;
  padding-top: 80px;
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 34px;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: 600;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: 30px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const Card = styled.View`
  background-color: ${colors.cardColor};
  flex-direction: row;
  padding: 5px 15px;
  border-radius: 25px;
`;

const Message = styled.Text`
  color: ${colors.textColor};
  margin: 5px 10px;
`;

const EmojiContainer = styled.View`
  border-style: solid;
  border-right-color: grey;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
`;

const Separator = styled.View`
  height: 20px;
`;

const EmojiText = styled.Text`
  margin-right: 10px;
  font-size: 18px;
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState([]);
  useEffect(() => {
    const feelings = realm.objects("Feeling");
    setFeelings(feelings);
    feelings.addListener(() => {
      const feelings = realm.objects("Feeling");
      setFeelings(feelings);
    });
    return () => {
      feelings.removeAllListeners();
    };
  }, []);
  return (
    <View>
      <Title>My Journal</Title>
      <FlatList
        data={feelings}
        inverted
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(feeling) => feeling._id + ""}
        renderItem={({ item }) => {
          return (
            <Card>
              <EmojiContainer>
                <EmojiText>{item.emotion}</EmojiText>
              </EmojiContainer>
              <Message>{item.message}</Message>
            </Card>
          );
        }}
      />
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </View>
  );
};
export default Home;
