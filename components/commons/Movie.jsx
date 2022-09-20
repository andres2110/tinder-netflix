import React from "react";
import { Image, StyleSheet, View, Text, Dimensions } from "react-native";

const Movie = (props) => {
  const [isReadMore, setReadMore] = React.useState(props.isReadMore);
  return (
    <View style={styles.main} animation="slideInRight" is>
      <Text style={{fontSize:20,fontWeight:"bold"}}>{props.title}</Text>
      <Image style={styles.img} source={{ uri: props.image }} />
      {!isReadMore ? (
        <Text onPress={() => setReadMore((bValue) => !bValue)}>
          Ver Reparto...
        </Text>
      ) : null}

      {isReadMore ? <Text style={styles.description}>{props.crew}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex:1,
    borderRadius:30,
    marginHorizontal:"10%",
    marginBottom:"5%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5ed8a",
    borderBottomColor:"#FAC213",
    borderBottomWidth:5,
  },
  img: {
    width: 200,
    height: 300,
    borderRadius:10
  },
  description: {
    paddingHorizontal: 9,
  },
});

export default Movie;