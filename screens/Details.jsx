import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MOVIE_INFO } from "../resources/movieInfo";
import { fnFetchMovieDetails } from "../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails, getStatus } from "../redux/selectors";
import DetailsCard from "../components/details/DetailsCard";
import { MESSAGES, STATUS } from "../resources/constants";
import Message from "../components/commons/Message";

const Details = ({ route, navigation }) => {
  const { idMovie } = route.params;
  const oMovie = MOVIE_INFO;
  const sStatus = STATUS.ERROR;
  // const fnDispatch = useDispatch();
  // const sStatus = useSelector(getStatus);
  // React.useEffect(() => {
  //   fnDispatch(fnFetchMovieDetails(idMovie));
  // }, [fnFetchMovieDetails, idMovie]);
  // const oMovie = useSelector(getMovieDetails);
  let Component = undefined;
  switch (sStatus) {
    case STATUS.READY:
      Component = <DetailsCard movieData={oMovie} navigation={navigation} />;
      break;
    case STATUS.LOADING:
      Component = (
        <View style={{ justifyContent: "center", flex: 1 }}>
          <ActivityIndicator size="large" color="#D61C4E" />
        </View>
      );
      break;
    case STATUS.ERROR:
      Component = <Message message={MESSAGES.E_DETAILS} routeName={"Favorites"}/>;
      break;
  }
  return <View style={styles.container}>{Component}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    paddingHorizontal: "3%",
  },
});

export default Details;
