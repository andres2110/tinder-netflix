import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Options = (props) => {
  return (
    <View style={styles.options}>
      <TouchableOpacity style={styles.unlike} onPress={props.onLiked}>
        <FontAwesome name="check" size={35} color="#27e246" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.unlike, styles.like]}
        onPress={props.onUnliked}
      >
        <FontAwesome name="close" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  options: {
    flex: 0.15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  unlike: {
    backgroundColor: "#D61C4E",
    borderRightColor: "white",
    borderRightWidth: 1,
    height: "100%",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
  like: {
    borderLeftColor: "white",
    marginLeft: "10%",
    borderLeftWidth: 1,
    borderRightColor: "#D61C4E",
  },
});

export default Options;
