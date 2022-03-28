import { StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
export { ButtonProps };
