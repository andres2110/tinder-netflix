import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Header from "./commons/Header";
const Drawer = createDrawerNavigator();

export default Main = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={styles.screenOptions}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  screenOptions: {
    drawerStyle: {
      backgroundColor: "#FAC213",
      width: 240,
    },
    header: Header,
    headerStyle: {
      height: "100%",
    },
    drawerActiveTintColor: "#D61C4E",
  },
};
