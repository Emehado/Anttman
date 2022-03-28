import React, { useRef, useEffect } from "react";
import { Animated, View, Easing, ViewStyle, StyleProp } from "react-native";

interface Props {
  children: React.ReactNode;
  type?: string;
  ease?: string;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

const Slide: React.FC<Props> = ({
  type = "fadeOut",
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

  const slideUp = {
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

  return (
    <View style={style}>
      <Animated.View
        style={[
          {
            transform: [type === "slideUp" ? slideUp : fadeOut],
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default Slide;
