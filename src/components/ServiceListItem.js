import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Text from "./Text";
import colors from "../config/colors";

const ServiceListItem = ({
  onPress,
  image,
  title,
  numberOfServiceProviders,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageView}>
        <Image source={image} style={styles.image} />
        <View style={styles.textView}>
          <Text>{title}</Text>
          <Text color={colors.darkGray} fontSize={15}>
            {numberOfServiceProviders}
          </Text>
        </View>
      </View>

      <View>
        <EvilIcons
          name="chevron-right"
          style={styles.icon}
          size={30}
          color={colors.dark}
        />
        {/* <Ionicons
          name="ios-arrow-forward"
          color={colors.dark}
          size={30}
          style={styles.icon}
        /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageView: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  textView: {
    marginLeft: 20,
  },
  image: {
    height: 70,
    width: 70,
  },
  icon: {
    marginRight: 10,
  },
});

export default ServiceListItem;
