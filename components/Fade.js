import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StyleSheet, Easing } from "react-native";

const Fade = ({
  direction = "fadeOut",
  ease = "bounce",
  duration = 1000,
  style,
  children,
}) => {
  const animateToPosition = 0;

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const animate = (value) => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration,
      easing: Easing[ease],
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(animateToPosition);
  }, []);

  const fadeUp = {
    translateY: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 400],
    }),
  };

  const fadeOut = {
    scale: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };

  direction === "fadeUp" ? (direction = fadeUp) : (direction = fadeOut);

  return (
    <View style={style}>
      <Animated.View
        style={[
          {
            transform: [direction],
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default Fade;
