import React from "react";
import IconButton from "./IconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Goback = ({ onPress, style }) => {
  return (
    <IconButton onPress={onPress} style={{ ...style }}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={24}
        color={colors.dark}
      />
    </IconButton>
  );
};

export default Goback;
