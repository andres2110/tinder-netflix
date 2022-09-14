import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Favorite from "../components/favorites/Favorite";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9A7",
  },
});

export default Favorites;
