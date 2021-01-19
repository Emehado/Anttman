import React from "react";
import containedButton from "./ContainedButton";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";
import PlainButton from "./PlainButton";

const Button = ({
  mode = "plain",
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
      <PlainButton
        onPress={onPress}
        title={title}
        disabled={disabled}
        color={color}
      />
    );
  }
};

export default Button;
