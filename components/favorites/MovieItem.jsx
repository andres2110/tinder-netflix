import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { fnReplaceTitle } from "../../resources/functions";
const MovieItem = (props) => {
  const sTitleSub = fnReplaceTitle(props.title);
  return (
    <View style={styles.movie}>
      <Image style={styles.movieImg} source={{ uri: props.image }} />
      <View style={styles.movieText}>
        <Text style={{ maxWidth: "80%", fontWeight:"300" }}>{sTitleSub}</Text>
        <FontAwesome name="eye" size={24} color="#158c0f" />
        {/* <Text>{props.imDbRating}</Text>
        <FontAwesome name="star" size={24} color="#FAC213" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    movie: {
      width: 160,
      height:280,
      backgroundColor: "#f5ed8a",
      borderRadius:10,
      marginHorizontal:10,
      marginBottom:5,
    },
    movieImg: {
      width: "100%",
      height: "82%",
    },
    movieText:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingVertical:5,
      paddingHorizontal:5
    },
  });
export default MovieItem;
