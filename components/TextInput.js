import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const AppTextInput = ({
  icon,
  size = 24,
  color = colors.dark,
  containerStyle,
  ...otherProps
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {icon && <Ionicons name={icon} size={size} color={color} />}

      <TextInput
        tintColor={colors.primary}
        style={styles.inputView}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: "100%",
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputView: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginLeft: 10,
  },
});

export default AppTextInput;
