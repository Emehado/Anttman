import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import Text from "../Text";
import colors from "../../config/colors";
import { ButtonProps } from "./types";

const OutlinedButton: React.FC<ButtonProps> = ({
  title = "button",
  disabled = false,
  color = colors.primary,
  onPress,
  containerStyle,
}) => {
  const [plainButtonWidth, setWidth] = useState(0);
  const getWidth = (layout) => {
    const { width } = layout;
    setWidth(width);
  };
  return (
    <View
      onLayout={(event) => getWidth(event.nativeEvent.layout)}
      style={[styles.outlined, { borderColor: color }, containerStyle]}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{ color, radius: plainButtonWidth, borderless: true }}
        hitSlop={plainButtonWidth}
      >
        <Text isBold color={color}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outlined: {
    borderWidth: 1,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default OutlinedButton;
