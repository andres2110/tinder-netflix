import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Match = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modal}>
        <View style={styles.matchContainer}>
          <Text style={styles.match}>It's a Match</Text>
          <Text style={{fontWeight:"bold"}}>{props.movieMatch.fullTitle}</Text>
        </View>
        <Image
          style={styles.img}
          source={{ uri: props.movieMatch.image }}
          resizeMode="stretch"
        />
        <View style={styles.options}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={{fontWeight:"bold"}}>Ver Matchs</Text>
            <MaterialCommunityIcons name="robot-love" size={24} color="#FAC213" />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onClose} style={styles.buttons}>
            <Text style={{fontWeight:"bold"}}>Buscar Más</Text>
            <MaterialCommunityIcons
              name="movie-open-plus"
              size={24}
              color="#D61C4E"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: "50%",
    marginBottom:"35%",
    borderRadius: 30,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5ed8a",
    borderBottomColor: "#FAC213",
    borderBottomWidth: 5,
  },
  img: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  match: {
    fontFamily: "Lobster_400Regular",
    fontSize: 36,
    color: "#77EEA7",
  },
  matchContainer: {
    width: "100%",
    backgroundColor: "#FFFCCC",
    alignItems: "center",
    borderRadius: 30,
  },
  options: {
    width: "100%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    borderColor: "#FFFCCC",
    backgroundColor:"#fffab6",
    borderWidth: 2,
    borderRadius: 10,
    alignItems:"center",
    flex:0.4,
    height:"60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Match;
