import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { IMAGE_URL } from "../resources/constants";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const [isReadMore, setReadMore] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>The Shawshank redemption</Text>
        <Image style={styles.img} source={{ uri: IMAGE_URL }} />
        {!isReadMore ? (
          <Text onPress={() => setReadMore(true)}>Ver sinopsis...</Text>
        ) : null}

        {isReadMore ? (
          <Text style={styles.description}>
            Andrew Dufresne es un hombre inocente que es acusado del asesinato
            de su mujer. Tras ser condenado a cadena perpetua, es enviado a la
            cárcel de Shawshank, en Maine.
          </Text>
        ) : (
          <></>
        )}
      </View>
      <View style={styles.options}>
        <FontAwesome name="close" size={35} color="white" />
        <FontAwesome name="check" size={35} color="#27e246" />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FEF9A7",
  },
  img: {
    width: 200,
    height: 300,
  },
  options: {
    flex: 1.2,
    backgroundColor: "#D61C4E",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  description: {
    paddingHorizontal: 9,
  },
});
