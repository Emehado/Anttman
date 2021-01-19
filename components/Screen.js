import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Screen = ({ style, children }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
