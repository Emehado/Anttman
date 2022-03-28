import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "@/config/colors";

interface Props {
  leftIcon?: string;
  rightIcon?: string;
  containerStyle?: StyleProp<ViewStyle>;
  [otherProps: string]: any;
}

const AppTextInput: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  containerStyle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && (
        <Ionicons name={leftIcon} size={24} color={colors.darkGray} />
      )}
      <TextInput style={styles.inputView} {...otherProps} />
      {rightIcon && (
        <Ionicons name={rightIcon} size={24} color={colors.darkGray} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: "100%",
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputView: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginLeft: 10,
  },
});

export default AppTextInput;
