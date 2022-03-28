import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../Text";
import colors from "../../config/colors";
import { ButtonProps } from "./types";

const containedButton: React.FC<ButtonProps> = ({
  containerStyle,
  color = colors.primary,
  style,
  onPress,
  disabled,
  title,
  ...otherProps
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={[styles.contained, { backgroundColor: color }, style]}
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        {...otherProps}
      >
        <Text isWhite isBold fontSize={19} style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contained: {
    height: 60,
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    color: colors.light,
  },
});

export default containedButton;
