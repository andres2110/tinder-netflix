import React from "react";
import { Image, StyleSheet, View, Text, Dimensions } from "react-native";

const Movie = (props) => {
  const [isReadMore, setReadMore] = React.useState(props.isReadMore);
  return (
    <View style={styles.main} animation="slideInRight" is>
      <Text style={{fontSize:25,fontWeight:"bold"}}>{props.title}</Text>
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
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  main: {
    flex:15,
    marginVertical:"20%",
    borderRadius:30,
    width: "80%",
    alignSelf:"center",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "white",
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

// const fnActionMovie = () => {
//     let iCurrentIndex = flatListRef.getCurrentIndex();
//     let iIndex = iCurrentIndex === aMovies.length - 1 ? 0 : iCurrentIndex + 1;
//     let bAnimated = !(iCurrentIndex === aMovies.length - 1);
//     if (sAction === "Unlike") {
//       iIndex = iCurrentIndex === 0 ? 0 : iCurrentIndex - 1;
//       bAnimated = !(iCurrentIndex === 0);
//     }
//     flatListRef.scrollToIndex({
//       animated: bAnimated,
//       index: iIndex,
//     });
//   };