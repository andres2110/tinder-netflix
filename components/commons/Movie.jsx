import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Movie = (props) => {
  const [isReadMore, setReadMore] = React.useState(props.isReadMore);
  return (
    <View style={styles.main} animation="slideInRight" is>
      <Text>{props.title}</Text>
      <Image style={styles.img} source={{ uri: props.image }} />
      {!isReadMore ? (
        <Text onPress={() => setReadMore((bValue)=>!bValue)}>Ver sinopsis...</Text>
      ) : null}

      {isReadMore ? <Text style={styles.description}>{props.crew}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 300,
  },
  description: {
    paddingHorizontal: 9,
  },
});

export default Movie;
