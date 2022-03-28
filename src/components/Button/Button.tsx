import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";
import TextButton from "./TextButton";

interface Props {
  onPress: () => void;
  title: string;
  mode?: "text" | "contained" | "outlined";
  disabled?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({
  mode = "text",
  onPress,
  title,
  disabled,
  color,
  containerStyle,
  style,
  ...otherProps
}) => {
  if (mode === "contained") {
    return (
      <ContainedButton
        containerStyle={containerStyle}
        onPress={onPress}
        title={title}
        disabled={disabled}
        color={color}
        style={style}
        {...otherProps}
      />
    );
  } else if (mode === "outlined") {
    return (
      <OutlinedButton
        onPress={onPress}
        title={title}
        disabled={disabled}
        color={color}
        containerStyle={containerStyle}
      />
    );
  } else {
    return (
      <TextButton
        onPress={onPress}
        title={title}
        disabled={disabled}
        color={color}
      />
    );
  }
};

export default Button;
