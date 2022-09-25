import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { MOVIE_INFO } from "../resources/movieInfo";
import { FontAwesome } from "@expo/vector-icons";
import ButtonLink from "../components/commons/ButtonLink";

const Details = () => {
  const oMovie = MOVIE_INFO;
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 26, alignSelf: "center" }}>
        {oMovie.title}
      </Text>
      <View style={styles.main}>
        <Image source={{ uri: oMovie.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.infoText}>{oMovie.year}</Text>
          <Text style={styles.infoText}>
            {`${oMovie.imDbRating} `}
            <FontAwesome name="star" size={24} color="#FAC213" />{" "}
          </Text>
        </View>
      </View>
      <ButtonLink title="Ver trailer" url={oMovie.trailer.linkEmbed} />
      <View>
        <Text style={{ marginVertical: "5%", fontSize: 15 }}>
          {oMovie.plot}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Cast</Text>
      <View>
        <Image source={{ uri: oMovie.actorList[0].image }} style={{width:100, height:150}}/>
        <Text>{oMovie.actorList[0].name}</Text>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "5%",
    paddingHorizontal: "3%",
  },
  main: {
    width: "50%",
    height: "40%",
    alignSelf: "center",
    marginBottom: "5%",
  },
  image: {
    width: "100%",
    height: "90%",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FAC213",
    borderWidth: 2,
    borderRadius: 15,
    padding: 3,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Details;
