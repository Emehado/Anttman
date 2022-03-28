import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import colors from "../../config/colors";
import { ButtonProps } from "./types";

const TextButton: React.FC<ButtonProps> = ({
  title = "button",
  disabled = false,
  color = colors.primary,
  onPress,
}) => {
  const [plainButtonWidth, setWidth] = useState(0);
  const getWidth = (layout) => {
    const { width } = layout;
    setWidth(width);
  };
  return (
    <View
      onLayout={(event) => getWidth(event.nativeEvent.layout)}
      style={{ ...styles.plain }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{ color, radius: plainButtonWidth, borderless: true }}
        hitSlop={plainButtonWidth}
      >
        <Text fontSize={19} color={color}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  plain: {
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default TextButton;
