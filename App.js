import React from "react";
import { View, Text } from "react-native";
import {
  useFonts,
  OldStandardTT_400Regular,
  OldStandardTT_700Bold
} from "@expo-google-fonts/old-standard-tt";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
export default function App() {
  let [fontsLoaded] = useFonts({ OldStandardTT_400Regular,OldStandardTT_700Bold });
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
