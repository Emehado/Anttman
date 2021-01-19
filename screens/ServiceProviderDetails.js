import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";

import Button from "../components/Button";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import Gallery from "../components/Gallery";
import Review from "../components/Review";
import IconButton from "../components/IconButton";
import ServiceProviderStats from "../components/ServiceProviderStats";
import ServiceProvider from "../components/ServiceProvider";
import Readmore from "../components/Readmore";

const { width } = Dimensions.get("screen").width;

const ServiceProviderDetails = () => {
  const [favorite, setFavorite] = useState(false);
  const [data, setData] = useState([
    require("../assets/images/gallery5.jpg"),
    require("../assets/images/gallery4.jpg"),
    require("../assets/images/gallery3.jpg"),
    require("../assets/images/gallery1.jpg"),
    require("../assets/images/gallery2.jpg"),
  ]);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.summaryView}>
          <ServiceProvider
            image={require("../assets/images/dp.jpg")}
            verified={true}
          />
          <View style={styles.statisticsView}>
            <ServiceProviderStats
              stars="4.3"
              reviews="58"
              hires="103"
              finishedJobs="91"
              hourlyRate="59.00"
            />
          </View>
          <View style={styles.buttonView}>
            <View style={styles.hireButtonView}>
              <Button title="Hire" mode="contained" onPress={() => {}} />
            </View>
            <View style={styles.addToFavoritesButtonView}>
              <IconButton onPress={handleFavorite} color={colors.secondary}>
                <AntDesign
                  name={favorite ? "heart" : "hearto"}
                  color={colors.secondary}
                  size={24}
                />
              </IconButton>
              <IconButton onPress={() => {}} color={colors.secondary}>
                <AntDesign name="phone" color={colors.secondary} size={24} />
              </IconButton>
              <IconButton onPress={() => {}} color={colors.secondary}>
                <AntDesign name="message1" color={colors.secondary} size={24} />
              </IconButton>
            </View>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Readmore
            title="About Service Provider"
            comment="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem"
          />
        </View>
        <View style={styles.GalleryView}>
          <Gallery containerStyle={{ marginTop: 20 }} data={data} />
        </View>
        <View style={styles.ratingsReviewView}>
          {[1, 2, 3, 4, 5].map((r) => (
            <Review key={r} />
          ))}
        </View>
        <View style={styles.similarServiceProvidersView}></View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryView: {
    marginRight: 15,
  },
  similarServiceProvidersView: {},
  ratingsReviewView: {
    marginTop: 20,
  },
  statisticsView: {
    marginTop: 10,
  },
  buttonView: {
    flexDirection: "row",
    width,
    alignItems: "center",
    marginVertical: 25,
    justifyContent: "space-evenly",
  },
  hireButtonView: {
    flex: 1,
    marginRight: 15,
  },
  addToFavoritesButtonView: {
    flex: 1,
    flexDirection: "row",
  },
  descriptionView: {},
  galleryView: {},
});

export default ServiceProviderDetails;
