import React from "react";
import { FlatList } from "react-native";
import MovieItem from "./MovieItem";

const ListOfMovies = (props) => {
  return (
    <FlatList
      disableScrollViewPanResponder={false}
      horizontal = {false}
      style={{marginHorizontal:10}}
      showsVerticalScrollIndicator={false}
      numColumns = {2}
      data={props.movies}
      renderItem={({ item }) => <MovieItem {...item} navigation={props.navigation}/>}
      keyExtractor = {item=>item.id}
    />
  );
};

export default ListOfMovies;
