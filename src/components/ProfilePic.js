import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import IconButton from "./IconButton";
import BackButton from "./BackButton";

const ProfilePic = ({ image, containerStyle, style }) => {
  const [previewPic, setPreviewPic] = useState(false);

  const openImagePreview = () => setPreviewPic(true);
  const closeImagePreview = () => setPreviewPic(false);
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TouchableOpacity
        style={{ height: "100%", width: "100%" }}
        onPress={openImagePreview}
      >
        <Image source={image} style={{ ...styles.profilePic, ...style }} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={previewPic}
        onRequestClose={closeImagePreview}
        style={styles.modal}
      >
        <BackButton onPress={closeImagePreview} />
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.imagePreview} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  modal: {
    flex: 1,
  },
  imagePreview: {
    height: "70%",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  backarrow: {
    margin: 10,
  },
});

export default ProfilePic;
