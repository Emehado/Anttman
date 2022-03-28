import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import colors from "../config/colors";
import Text from "./Text";

const Review = ({ image, name, stars, date, comment }) => {
  const [truncateText, setTruncateText] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <Image
          source={require("../assets/images/dp.jpg")}
          style={styles.image}
        />
        <Text fontSize={16}>John Kugbe</Text>
      </View>
      <View style={styles.starsView}>
        <AirbnbRating
          count={5}
          defaultRating={4}
          showRating={false}
          size={10}
          isDisabled
          selectedColor={colors.primary}
        />
        <Text fontSize={12}>02/05/2020</Text>
      </View>
      <View style={styles.commentView}>
        <TouchableOpacity onPress={() => setTruncateText(!truncateText)}>
          <Text fontSize={12} numberOfLines={truncateText ? 5 : 50}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  userView: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsView: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  commentView: {
    marginTop: 3,
  },
});

export default Review;
