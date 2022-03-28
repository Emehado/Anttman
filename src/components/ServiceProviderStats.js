import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Text from "./Text";
import colors from "../config/colors";

const Divider = () => (
  <View
    style={{
      height: "70%",
      width: 1,
      backgroundColor: colors.gray,
      borderRadius: 5,
    }}
  />
);

const ServiceProviderStats = ({
  stars,
  reviews,
  hires,
  finishedJobs,
  hourlyRate,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.stars}>
          <Text fontSize={14}>{stars} </Text>
          <AntDesign name="star" size={12} color={colors.dark} />
        </View>
        <Text fontSize={14}>{reviews} reviews</Text>
      </View>
      <Divider />
      <View style={{ alignItems: "center" }}>
        <View style={styles.stars}>
          <Text fontSize={14}>{hires} </Text>
          <FontAwesome name="handshake-o" size={12} color="black" />
        </View>
        <Text fontSize={14}>Hires</Text>
      </View>
      <Divider />
      <View style={{ alignItems: "center" }}>
        <View style={styles.stars}>
          <Text fontSize={14}>{finishedJobs} </Text>
          <MaterialCommunityIcons
            name="flag-checkered"
            size={12}
            color={colors.dark}
          />
        </View>
        <Text fontSize={14}>Finished Jobs</Text>
      </View>
      <Divider />
      <View style={{ alignItems: "center" }}>
        <View style={styles.stars}>
          <Text fontSize={14}>{hourlyRate} </Text>
          <MaterialCommunityIcons
            name="cash-multiple"
            size={12}
            color={colors.dark}
          />
        </View>
        <Text fontSize={14}>Rate/Hr</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stars: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ServiceProviderStats;
