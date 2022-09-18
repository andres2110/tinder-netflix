import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fnFetchMovies, addLiked } from "../redux/moviesSlice";
import { getMoviesToDisplay, getRandomMatchs } from "../redux/selectors";
import Options from "../components/home/Options";
import Swiper from "../components/home/Swiper";

const Home = () => {
  const [sAction, setAction] = React.useState("None");
  return (
    <View style={styles.container}>
      <Swiper action={sAction} onSetAction={(action) => setAction(action)} />
      <Options
        onLiked={() => setAction("liked")}
        onUnliked={() => setAction("unliked")}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
