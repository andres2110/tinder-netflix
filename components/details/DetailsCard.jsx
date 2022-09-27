import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "./MovieCard";
import ListOfActors from "./ListOfActors";
import ButtonLink from "../commons/ButtonLink";
import { FontAwesome } from "@expo/vector-icons";

const DetailsCard = ({ movieData, navigation }) => {
  const oMovie = movieData;
  return (
    <View>
      {/* <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        style={{ position: "absolute" }}
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      /> */}
      <Text style={{ fontWeight: "bold", fontSize: 26, alignSelf: "center" }}>
        {oMovie.title}
      </Text>
      <MovieCard {...oMovie} />
      <View style={styles.options}>
        <Text style={styles.watched}>
          Marcar como vista{" "}
          <FontAwesome name="eye-slash" size={18} color="#D61C4E" />
        </Text>
        <ButtonLink title="Ver trailer" url={oMovie.trailer.linkEmbed} />
      </View>
      <Text style={{ marginVertical: "2%", fontSize: 15 }}>{oMovie.plot}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 23 }}>Cast</Text>
      <ListOfActors actorList={oMovie.actorList} />
    </View>
  );
};
const styles = StyleSheet.create({
  watched: {
    fontSize: 16,
    fontWeight: "200",
    alignItems: "center",
  },
  options: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
  },
});

export default DetailsCard;
