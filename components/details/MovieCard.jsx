import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const MovieCard = (props) => {
  return (
    <View style={styles.main}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.infoText}>{props.year}</Text>
        <Text style={styles.infoText}>
          {`${props.imDbRating} `}
          <FontAwesome name="star" size={24} color="#FAC213" />{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
      width: "50%",
      height: "40%",
      alignSelf: "center",
      marginBottom: "3%",
    },
    image: {
      width: "100%",
      height: "90%",
      marginBottom:"2%"
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

  export default MovieCard;
