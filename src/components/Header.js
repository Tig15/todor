import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import colors from "../misc/colors";

const Header = () => {
  const [fontsLoaded] = useFonts({
    Nunalic: require("../assets/fonts/Nunito-Italic.ttf"),
    Raleway: require("../assets/fonts/Raleway-Regular.ttf"),
    Quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={styles.text}>TO-DO</Text>
        <TouchableOpacity style={styles.btn}>
          <Entypo name="trash" size={18} color={colors.FRONT} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT,
  },
  text: {
    fontSize: 22,
    color: colors.FRONT,
    marginLeft: 5,
    fontFamily: "Nunalic",
  },
  btn: {
    margin: 5,
  },
});
