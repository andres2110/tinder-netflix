import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import { getSelectedMovies } from "../redux/selectors";
import  ListOfMovies  from "../components/favorites/ListOfMovies";

const Favorites = ({navigation}) => {
  const aSelectMovies = useSelector(getSelectedMovies);
  let aMatchedMovies = aSelectMovies.filter((oMovie)=> oMovie.status === "matched");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.match}>Matches</Text>
      <ListOfMovies movies ={aMatchedMovies} navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: "10%",
  },
  match: {
    fontFamily: "Allerta_400Regular",
    fontSize: 25,
    // color: "#158c0f",
  },
});

export default Favorites;
