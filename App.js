import React from "react";
//import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  OldStandardTT_400Regular,
} from "@expo-google-fonts/old-standard-tt";
import Home from "./screens/Home";
import Favorites from "./screens/Favorites";
import Header from "./components/commons/Header";
const Drawer = createDrawerNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({ OldStandardTT_400Regular });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={styles.screenOptions}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles={
  screenOptions:{
    drawerStyle: {
      backgroundColor: "#FAC213",
      width: 240,
    },
    header: Header,
    headerStyle:{
      height: '100%'
    },
    drawerActiveTintColor:"#D61C4E"
  },
  
}