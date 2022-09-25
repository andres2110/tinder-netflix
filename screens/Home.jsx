import React from "react";
import { StyleSheet, View } from "react-native";
import Options from "../components/home/Options";
import Swiper from "../components/home/Swiper";
import Match from "../components/home/Match";

const Home = ({navigation}) => {
  const [sAction, setAction] = React.useState("None");
  const [oMovieMatch, setMovieMatch] = React.useState({});
  const [bIsMatch, setIsMatch] = React.useState(false);
  const fnMatch = (oMovie) => {
    setIsMatch(true);
    setMovieMatch(oMovie);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Match
          visible={bIsMatch}
          onRequestClose
          movieMatch={oMovieMatch}
          navigation = {navigation}
          onClose={() => {
            setIsMatch(false);
          }}
        />
        <Swiper
          action={sAction}
          onSetAction={(action) => setAction(action)}
          onMatch={fnMatch}
        />
        {!bIsMatch ? (
          <Options
            onLiked={() => setAction("liked")}
            onUnliked={() => setAction("unliked")}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  main: {
    flex: 0.70,
    paddingBottom:"5%"
  },
});
