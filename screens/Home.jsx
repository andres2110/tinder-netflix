import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fnFetchMovies, addLiked } from "../redux/moviesSlice";
import { getMoviesToDisplay, getSelectedMovies } from "../redux/selectors";
import Movie from "../components/commons/Movie";
import { IMAGE_URL, MOVIES, MOVIES_TEST } from "../resources/constants";
import Options from "../components/home/Options";
import Carousel from "react-native-snap-carousel";

const Home = () => {
  const [aMovies, setMovies] = React.useState(MOVIES_TEST);
  const [iIndex, setIndex] = React.useState(0);
  const [oState, setState] = React.useState({
    isTouch: false,
    status: "",
    index: 0,
    isSnap: false,
  });
  const aSelectedMovies = useSelector(getSelectedMovies);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    if (oState.isTouch) {
      setMovies((aMoviesP) => {
        fnDispatch(
          addLiked({ ...aMoviesP[oState.index], status: oState.status })
        );
        return aMoviesP.filter((oMovie, index) => index !== oState.index);
      });
      setState((oStateP) => ({
        ...oStateP,
        isTouch: false,
        status: "",
        index: 0,
      }));
    }
  }, [oState]);
  const fnUpdateIndex = () => {
    if (oState.isSnap) {
      setState((oStateP) => ({ ...oStateP, isSnap: false }));
      return;
    }
    let sStatus = "";
    let iCurrentIndex = oCarousel.currentIndex;
    if (
      iCurrentIndex > iIndex ||
      (iIndex === aMovies.length - 1 && iCurrentIndex === 0)
    )
      sStatus = "liked";
    if (
      iCurrentIndex < iIndex ||
      (iIndex === 0 && iCurrentIndex === aMovies.length - 1)
    )
      sStatus = "unliked";
    setState({
      isTouch: true,
      status: sStatus,
      index: iIndex,
      isSnap: true,
    });

  };
  const fnUpdateData = () => {
    setIndex(oCarousel.currentIndex);
  };
  const fnLikedMovie = () => {
    setState({
      isTouch: true,
      status: "liked",
      index: oCarousel.currentIndex,
      isSnap: true,
    });
    oCarousel.snapToNext();
  };
  const fnUnlikeMovie = () => {
    oCarousel.snapToPrev();
    setState({
      isTouch: true,
      status: "unliked",
      index: oCarousel.currentIndex,
      isSnap: true,
    });
  };
  let oCarousel = Carousel;

  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      {aMovies.length > 0 ? (
        <Carousel
          ref={(ref) => {
            oCarousel = ref;
          }}
          data={aMovies}
          renderItem={({ item }) => {
            return <Movie {...item} isReadMore={false} />;
          }}
          itemWidth={width}
          sliderWidth={width}
          layout="tinder"
          layoutCardOffset={9}
          onScrollEndDrag={fnUpdateData}
          loop
          onSnapToItem={fnUpdateIndex}
        />
      ) : (
        <View>
          <Text>No tienes más peliculas</Text>
        </View>
      )}
      <Options onLiked={fnLikedMovie} onUnliked={fnUnlikeMovie} />
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
