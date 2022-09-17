import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import Favorite from "../components/favorites/Favorite";
import { getSelectedMovies } from "../redux/selectors";

const Favorites = () => {
  const aSelectMovies = useSelector(getSelectedMovies);
  const aLikedMovies = aSelectMovies.filter(
    (oMovie) => oMovie.status === "liked"
  );
  const aUnlikedMovies = aSelectMovies.filter(
    (oMovie) => oMovie.status === "unliked"
  );
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Liked</Text>
          {aLikedMovies.map((oMovie) => {
            return <Text key={oMovie.id}> - {oMovie.title}</Text>;
          })}
        </View>
        <View>
          <Text>Unliked</Text>
          {aUnlikedMovies.map((oMovie) => {
            return <Text key={oMovie.id}> - {oMovie.title}</Text>;
          })}
        </View>
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
