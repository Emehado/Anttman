import React from "react";
import AppLoading from "expo-app-loading";
import { StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { useFonts } from "expo-font";
import colors from "../config/colors";

interface Props {
  children: React.ReactNode;
  isPrimary?: boolean;
  isHeading?: boolean;
  isWhite?: boolean;
  isBold?: boolean;
  color?: string;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({
  children,
  isPrimary,
  isWhite,
  isHeading,
  isBold,
  color = colors.dark,
  fontSize = 18,
  style,
  ...otherProps
}) => {
  const pathToFont = "../assets/fonts";
  const [fontsLoaded] = useFonts({
    JostRegular: require(`${pathToFont}/Jost-Regular.ttf`),
    JostSemiBold: require(`${pathToFont}/Jost-SemiBold.ttf`),
    JostBold: require(`${pathToFont}/Jost-Bold.ttf`),
    JostLight: require(`${pathToFont}/Jost-Light.ttf`),
  });
  let fontFamily = "JostRegular";

  if (isWhite) {
    color = colors.light;
  }
  if (isHeading) {
    fontSize = 30;
    isBold = true;
  }
  if (isBold) {
    fontFamily = "JostBold";
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[{ fontFamily, color, fontSize }, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
