import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { IMAGE_URL } from "../../resources/constants";
import { Entypo } from "@expo/vector-icons";

const Favorite = () =>{
    return(
        <View style={styles.box}>
        <Image style={styles.img} source={{ uri: IMAGE_URL }}></Image>
        <Text>Title</Text>
        <View style={styles.rating}>
          <Text>9.2</Text>
          <Entypo name="star" size={15} color="#F8E117" />
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    rating: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    box: {
      display: "flex",
      width: "25%",
      height: "25%",
      alignItems: "center",
      elevation:3,
      shadowColor:"#333",
      shadowOffset:{width:1,height:1},
      shadowOpacity:0.3,
    },
    img: {
      width: "100%",
      height: "80%",
    },
  });
  
export default Favorite;