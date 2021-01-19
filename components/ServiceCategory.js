import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Text from "../components/Text";

const ServiceCategory = ({
  name,
  numberOfServiceProviders,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.fadingContainer}
    >
      <View style={styles.innerView}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <Text numberOfLines={2} style={styles.fadingText}>
          {name}
        </Text>
        <Text numberOfLines={1} fontSize={14} style={styles.fadingText}>
          {numberOfServiceProviders}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    backgroundColor: "#FFF",
    height: 220,
    width: 170,
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
    margin: 10,
  },
  innerView: {
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 110,
    height: 90,
    marginBottom: 20,
  },
  fadingText: {
    textAlign: "center",
  },
});

export default ServiceCategory;
