import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import Text from "../components/Text";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Fade from "../components/Fade";

const GettingStarted = () => {
  const image = require("../assets/images/stickman.jpg");
  return (
    <Screen>
      <ImageBackground
        source={image}
        style={styles.imagebg}
        resizeMode="center"
        blurRadius={0}
      >
        <View style={styles.logoView}>
          <Text fontFamily="Inter_900Black">ANTTMAN</Text>
          <Text>Welcome to the Colony</Text>
        </View>
        <View style={styles.buttonsView}>
          <Fade direction="fadeUp" ease="ease">
            <Button
              onPress={() => console.log("pressed")}
              mode="contained"
              title="Login"
            />
            <View style={styles.signupView}>
              <Text>Don't have an account?</Text>
              <Button
                onPress={() => console.log("pressed")}
                title="Sign Up"
                color={colors.secondary}
              />
            </View>
          </Fade>
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
    padding: 15,
  },
  logoView: {
    flex: 3,
    alignItems: "center",
  },
  buttonsView: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
  signupView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default GettingStarted;
