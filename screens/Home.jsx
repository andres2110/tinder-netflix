import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { fnFetchMovies } from "../redux/moviesSlice";
import { getMoviesToDisplay } from "../redux/selectors";
import Movie from "../components/commons/Movie";

const Home = () => {
  const [iActualMovieId, setActualMovie] = React.useState(0);
  const aMovies = useSelector(getMoviesToDisplay);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    fnDispatch(fnFetchMovies());
  }, [fnDispatch]);

  const fnLikedMovie = () => {
    setActualMovie((iLastID) => {
      iLastID++;
      if (iLastID === aMovies.lenght) {
        iLastID = 0;
      }
      return iLastID;
    });
  };


  return (
    <View style={styles.container}>
      <Movie {...aMovies[iActualMovieId]} isReadMore={false} animation="bounceInRight"/>
      <View style={styles.options}>
        <FontAwesome name="close" size={35} color="white" />
        <FontAwesome
          name="check"
          size={35}
          color="#27e246"
          onPress={fnLikedMovie}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9A7",
  },
  options: {
    flex: 1.2,
    backgroundColor: "#D61C4E",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
