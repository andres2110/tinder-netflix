import React from "react";
import { View, Text } from "react-native";
import {
  useFonts,
  OldStandardTT_400Regular,
  OldStandardTT_700Bold,
  OldStandardTT_400Regular_Italic,
} from "@expo-google-fonts/old-standard-tt";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Allerta_400Regular } from "@expo-google-fonts/allerta";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
export default function App() {
  let [fontsLoaded] = useFonts({
    OldStandardTT_400Regular,
    OldStandardTT_700Bold,
    Lobster_400Regular,
    OldStandardTT_400Regular_Italic,
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
