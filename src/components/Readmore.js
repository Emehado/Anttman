import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Readmore = ({ title = "About", comment }) => {
  const [readMore, setReadMore] = useState(3);
  const [readmoreArrow, setReadmoreArrow] = useState("chevron-right");
  const handleReadmore = () => {
    readMore === 3 ? openReadmore() : closeReadmore();
  };
  const openReadmore = () => {
    setReadMore(10);
    setReadmoreArrow("chevron-down");
  };

  const closeReadmore = () => {
    setReadMore(3);
    setReadmoreArrow("chevron-right");
  };
  return (
    <TouchableOpacity onPress={handleReadmore}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text fontSize={15} fontFamily={"Inter_900Black"}>
          {title}
        </Text>
        <MaterialCommunityIcons
          name={readmoreArrow}
          size={19}
          color={colors.dark}
        />
      </View>
      <Text fontSize={14} numberOfLines={readMore}>
        {comment}
      </Text>
    </TouchableOpacity>
  );
};

export default Readmore;
