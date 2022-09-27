import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const ListOfActors = (props) => {
  return (
    <FlatList
      data={props.actorList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={{ maxWidth: 100, marginRight:2 ,maxHeight:180}}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 150 }}
            />
            <Text>{item.name}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListOfActors;
