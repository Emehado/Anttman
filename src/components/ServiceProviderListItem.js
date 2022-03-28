import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Text from "./Text";
import Button from "./Button";

const ServiceProviderListItem = ({
  onPress,
  image,
  services,
  stars,
  name,
  rateNumber,
  verified = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageView}>
          {image ? (
            <Image source={image} style={styles.image} />
          ) : (
            <AntDesign name="user" color={colors.dark} size={24} />
          )}
        </View>
        <View>
          <Text>{name}</Text>
          <Text fontSize={12}>{services}</Text>
          <View style={styles.subtitleView}>
            <Text fontSize={10}>{stars}</Text>
            <AntDesign
              name="star"
              size={7}
              color={colors.dark}
              style={{ marginRight: 10 }}
            />
            <Text fontSize={10}>{rateNumber}</Text>
            <AntDesign name="plus" size={7} color={colors.dark} />
            {verified && (
              <>
                <Text
                  color={colors.secondary}
                  fontSize={10}
                  style={{ marginLeft: 10 }}
                >
                  Verified
                </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  size={10}
                  color={colors.secondary}
                />
              </>
            )}
          </View>
        </View>
      </View>
      <View>
        <Button
          title="Hire"
          onPress={onPress}
          mode="outlined"
          containerStyle={{ borderRadius: 15, height: 30, padding: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  imageView: {
    padding: 5,
    marginRight: 10,

    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 35,
    height: "100%",
    width: "100%",
  },
  subtitleView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ServiceProviderListItem;
