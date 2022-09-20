import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addLiked } from "../../redux/moviesSlice";
import { getMoviesToDisplay, getRandomMatchs } from "../../redux/selectors";
import Movie from "../commons/Movie";
import Carousel from "react-native-snap-carousel";

const Swiper = (props) => {
  const aMoviesToDisplay = useSelector(getMoviesToDisplay);
  const aRandomMatch = useSelector(getRandomMatchs);
  const [aMovies, setMovies] = React.useState(aMoviesToDisplay);
  const [iIndex, setIndex] = React.useState(0);
  const [bIsTouch, setISTouch] = React.useState(false);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    if (props.action === "liked" || props.action === "unliked") {
      props.action === "liked"
        ? oCarousel.snapToNext(false)
        : oCarousel.snapToPrev(false);
      setISTouch(true);
      fnUpdateData(props.action, oCarousel.currentIndex);
      props.onSetAction("none");
    }
  }, [props.action]);
  const fnUpdateData = (sAction, iIndex) => {
    let oMovie = { ...aMovies[iIndex], status: sAction };
    fnDispatch(addLiked(oMovie));
    fnVerifyMatch(oMovie,sAction);
    setMovies((aMoviesP) =>
      aMoviesP.filter((oMovie, index) => index !== iIndex)
    );
  };
  const fnVerifyMatch = (oMovie,sAction)=>{
    if(sAction!=="liked") return; 
    let bIsMatch = aRandomMatch.filter((value)=>value===oMovie.id).length > 0;
    if(bIsMatch) props.onMatch(oMovie);
  }
  const fnDoSnap = () => {
    if (bIsTouch) {
      setISTouch(false);
      return;
    }
    let sStatus = "";
    let iLastIdx = aMovies.length - 1;
    let iCurrentIndex = oCarousel.currentIndex;
    let iResult = iIndex - iCurrentIndex;
    let iSum = iIndex + iCurrentIndex;
    iResult = iSum === iLastIdx ? iResult * -1 : iResult;
    sStatus = iResult < 0 ? "liked" : "unliked";
    fnUpdateData(sStatus, iIndex);
  };
  let oCarousel = Carousel;
  const { width } = Dimensions.get("window");
  return (
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
      onScrollEndDrag={() => setIndex(oCarousel.currentIndex)}
      loop
      onSnapToItem={fnDoSnap}
    />
  );
};

export default Swiper;
