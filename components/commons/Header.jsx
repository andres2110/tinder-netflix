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
   // flexDirection: "row-reverse",
    backgroundColor: "#FAC213",
    width: "100%",
  },
  titleText: {
    fontSize: 23,
    color: "#D61C4E",
    fontFamily: "OldStandardTT_400Regular",
  },
});
export default Header;
