import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "./Text";
import colors from "../config/colors";
import ProfilePic from "./ProfilePic";

const ServiceProvider = ({ image, verified }) => {
  return (
    <View style={styles.container}>
      <View style={styles.picNameView}>
        <View style={styles.profilePicView}>
          {image ? (
            <ProfilePic image={image} />
          ) : (
            <AntDesign name="user" size={40} color={colors.dark} />
          )}
        </View>
        <View>
          <Text fontSize={25} numberOfLines={2} fontFamily={"Inter_900Black"}>
            John Ametsime Kwasi
          </Text>
          {verified && (
            <View style={styles.verifiedView}>
              <MaterialCommunityIcons
                name="map-marker"
                size={12}
                color={colors.dark}
              />
              <Text fontSize={12} style={{ marginRight: 5 }}>
                Accra, Ghana
              </Text>
              <Text color={colors.secondary} fontSize={14}>
                verified
              </Text>
              <MaterialCommunityIcons
                name="check-decagram"
                size={12}
                color={colors.secondary}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  picNameView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicView: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ServiceProvider;
