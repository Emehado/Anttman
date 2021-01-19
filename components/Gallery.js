import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import BackButton from "./BackButton";

const { width, height } = Dimensions.get("window");

const Gallery = ({ data = [], containerStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const openImage = (imageId) => {
    setIndex(data.indexOf(imageId));
    setModalVisible(true);
  };

  const closeImagePreview = () => setModalVisible(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openImage(item)}>
      <Image style={styles.image} source={item} />
    </TouchableOpacity>
  );
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeImagePreview}
      >
        <Goback onPress={closeImagePreview} />
        <Swiper index={index} loop={false} showsButtons={false}>
          {data.map((image) => (
            <View key={image} style={styles.slide}>
              <Image style={styles.openImage} source={image} />
            </View>
          ))}
        </Swiper>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 150,
    width: 110,
    borderRadius: 10,
    marginRight: 5,
  },

  slide: {
    flex: 1,
  },
  openImage: {
    marginTop: 15,
    width,
    height: height / 1.3,
  },
});

export default Gallery;
