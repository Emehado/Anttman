import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Text } from "react-native";

const AppText = ({
  children,
  color = "black",
  fontFamily = "Inter_400Regular",
  fontSize = 20,
  style,
  ...otherProps
}) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={{ fontFamily, color, fontSize, ...style }} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
