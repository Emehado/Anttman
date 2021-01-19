import React from "react";
import { Pressable, View } from "react-native";
import colors from "../config/colors";

const IconButton = ({
  onPress,
  color = colors.dark,
  size = 34,
  disbaled,
  children,
}) => {
  const containerSize = size + 20;
  return (
    <View
      style={{
        padding: 10,
        width: containerSize,
        borderRadius: containerSize / 2,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={disbaled}
        // hitSlop={size/2}
        android_ripple={{ color, radius: size, borderless: true }}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default IconButton;
