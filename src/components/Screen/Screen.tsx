import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Constants from "expo-constants";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen: React.FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
