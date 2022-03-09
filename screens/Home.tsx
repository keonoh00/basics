import React from "react";
import styled from "styled-components/native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDB } from "../context";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";

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
  max-width: 84%;
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

const Delete = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState([]);
  useEffect(() => {
    const feelings = realm.objects("Feeling");
    feelings.addListener((feelings, changes) => {
      setFeelings(feelings.sorted("_id", true));
    });
    return () => {
      feelings.removeAllListeners();
    };
  }, []);

  const onPress = (id) => {
    realm.write(() => {
      const feeling = realm.objectForPrimaryKey("Feeling", id);
      realm.delete(feeling);
    });
  };
  return (
    <View>
      <Title>My Journal</Title>
      <FlatList
        data={feelings}
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
              <Delete onPress={() => onPress(item._id)}>
                <FontAwesome5 name="eraser" size={22} color="red" />
              </Delete>
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
