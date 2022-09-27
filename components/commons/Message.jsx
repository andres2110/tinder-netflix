import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Message = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        style={{ position: "absolute" }}
        onPress={props.navigate}
      /> */}
      <Text style={{ fontSize: 16, fontWeight: "200" }}>{props.message}</Text>
    </View>
  );
};

export default Message;
