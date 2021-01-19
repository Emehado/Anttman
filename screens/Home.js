import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "../components/Text";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import Fade from "../components/Fade";
import ServiceCategory from "../components/ServiceCategory";
import IconButton from "../components/IconButton";
import colors from "../config/colors";

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(70);
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

  const renderItem = ({ item }) => (
    <Fade direction={"fadeUp"}>
      <ServiceCategory
        name={item.name}
        numberOfServiceProviders={item.numberOfServiceProviders}
        image={item.image}
        onPress={() => {
          setHeaderHeight(0);
        }}
      />
    </Fade>
  );

  return (
    <Screen style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.welcomeView}>
          <Text fontSize={25}>Hi, Emehado!</Text>
          <IconButton
            onPress={() => {
              fade();
            }}
          >
            <AntDesign color="black" name="user" size={24} />
          </IconButton>
        </View>
      </View>

      <View style={styles.categoryView}>
        <View style={styles.searchInputView}>
          <TextInput
            icon="ios-search"
            placeholder="Search for service"
            containerStyle={styles.searchInput}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.serviceCategories}
          data={data}
          renderItem={renderItem}
          key={(item) => item}
          numColumns={2}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
  },
  headerView: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
    height: 70,
  },
  welcomeView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    backgroundColor: colors.light,
  },
  searchInputView: {
    marginHorizontal: 15,
    marginBottom: 5,
  },
  categoryView: {
    flex: 1,
  },
  serviceCategories: {
    width: "100%",
    alignItems: "center",
  },
});

export default Home;
