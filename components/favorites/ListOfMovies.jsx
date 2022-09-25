import React from "react";
import { FlatList } from "react-native";
import MovieItem from "./MovieItem";

const ListOfMovies = (props) => {
    console.log(props.movies);
  return (
    <FlatList
      horizontal = {false}
      style={{marginHorizontal:10}}
      showsVerticalScrollIndicator={false}
      numColumns = {2}
      data={props.movies}
      renderItem={({ item }) => <MovieItem {...item} />}
      keyExtractor = {item=>item.id}
    />
  );
};

export default ListOfMovies;
