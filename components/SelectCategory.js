import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Text from "./Text";
import BackButton from "./BackButton";

import ServiceCategory from "./ServiceCategory";
import colors from "../config/colors";
import { Entypo } from "@expo/vector-icons";

const SelectCategory = () => {
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: "1",
      name: "Health services",
      numberOfServiceProviders: "26",
      image: require("../assets/images/health.png"),
    },
    {
      id: "2",
      name: "Handyman services",
      numberOfServiceProviders: "1,175",
      image: require("../assets/images/stickman.png"),
    },
    {
      id: "3",
      name: "IT Services",
      numberOfServiceProviders: "1,300",
      image: require("../assets/images/IT.png"),
    },
    {
      id: "4",
      name: "Fashion Design",
      numberOfServiceProviders: "7,833",
      image: require("../assets/images/fashion.jpg"),
    },
    {
      id: "5",
      name: "Food Services",
      numberOfServiceProviders: "14,781",
      image: require("../assets/images/food.jpg"),
    },
    {
      id: "6",
      name: "Cleaning Services",
      numberOfServiceProviders: "15,300",
      image: require("../assets/images/cleaning.png"),
    },
    {
      id: "7",
      name: "Care-taker Services",
      numberOfServiceProviders: "99",
      image: require("../assets/images/care-taker.png"),
    },
    {
      id: "7",
      name: "Others",
      numberOfServiceProviders: "99",
      image: require("../assets/images/others.jpg"),
    },
  ]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const renderItem = ({ item }) => (
    <ServiceCategory
      name={item.name}
      numberOfServiceProviders={item.numberOfServiceProviders}
      image={item.image}
      onPress={() => {}}
    />
  );

  return (
    <View>
      <TouchableOpacity onPress={openModal} style={styles.container}>
        <Text fontSize={15} color={colors.darkGray}>
          {category || "Select category"}
        </Text>
        <Entypo name="chevron-small-down" size={24} color={colors.darkGray} />
      </TouchableOpacity>
      <Modal
        visible={modalOpen}
        animationType="slide"
        onRequestClose={closeModal}
        style={styles.modal}
      >
        <BackButton onPress={closeModal} />
        <View style={styles.modalView}>
          <Text>Select Category</Text>
          <FlatList
            contentContainerStyle={styles.serviceCategories}
            data={data}
            renderItem={renderItem}
            key={(item) => item.id}
            numColumns={2}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    borderRadius: 50,
    width: "100%",
    backgroundColor: colors.gray,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  modalView: {
    paddingLeft: 15,
  },
});

export default SelectCategory;
