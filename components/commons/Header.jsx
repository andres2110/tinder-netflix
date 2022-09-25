import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
const Header = ({navigation}) => {
  return (
    <View style={styles.title}>
      <Entypo name="menu" size={30} color="black" onPress={()=>{navigation.openDrawer()}}/>
      <Text style={styles.titleText}>
        TINFLEX
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingTop:"15%",
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: "#FAC213",
    width: "100%",
    borderBottomStartRadius:5,
    borderBottomEndRadius:5,
    shadowColor:"black",
    shadowOpacity:2
  },
  titleText: {
    fontSize: 25,
    color: "#D61C4E",
    fontFamily: "Allerta_400Regular",
    fontWeight:"bold",
  },
});
export default Header;
