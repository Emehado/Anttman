import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Text from "../components/Text";
import ServiceLIstItem from "../components/ServiceListItem";

const Services = () => {
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
      id: "8",
      name: "Others",
      numberOfServiceProviders: "99",
      image: require("../assets/images/others.jpg"),
    },
  ]);

  const renderItem = ({ item }) => (
    <ServiceLIstItem
      onPress={() => {}}
      title={item.name}
      image={item.image}
      numberOfServiceProviders={item.numberOfServiceProviders}
    />
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        key={() => item.id}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Services;
