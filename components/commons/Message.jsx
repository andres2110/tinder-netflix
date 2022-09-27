import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Message = (props) => {
  const oNavigate = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 16, fontWeight: "200" }}>{props.message}</Text>
      <Button
        title="Volver"
        onPress={() => {
          oNavigate.navigate(props.routeName);
        }}
      />
    </View>
  );
};

export default Message;
