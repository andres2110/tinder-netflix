import React from "react";
import { View, Text } from "react-native";
import { useFonts,Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Allerta_400Regular } from "@expo-google-fonts/allerta";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
export default function App() {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Allerta_400Regular
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
