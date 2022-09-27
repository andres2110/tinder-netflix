import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import { getSelectedMovies } from "../redux/selectors";
import ListOfMovies from "../components/favorites/ListOfMovies";
import Message from "../components/commons/Message";
import { MESSAGES } from "../resources/constants";

const Favorites = ({ navigation }) => {
  const aSelectMovies = useSelector(getSelectedMovies);
  let aMatchedMovies = aSelectMovies.filter(
    (oMovie) => oMovie.status === "matched"
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.match}>Matches</Text>
      {aMatchedMovies.length ? (
        <ListOfMovies movies={aMatchedMovies} navigation={navigation} />
      ) : (
        <Message message ={MESSAGES.I_MATCH} routeName={"Home"}/>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  match: {
    fontFamily: "Allerta_400Regular",
    fontSize: 25,
  },
});

export default Favorites;
