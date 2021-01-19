import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import Fade from "../components/Fade";
import colors from "../config/colors";

const ResetPassword = () => {
  return (
    <Screen>
      <View style={styles.welcomeBackView}>
        <Text style={styles.heading} fontSize={30} fontFamily="Inter_900Black">
          Can't Remember your Password?
        </Text>
        <Text>We can help with that!</Text>
      </View>
      <View style={styles.formView}>
        <Fade ease="ease" direction="fadeUp" duration={500}>
          <TextInput containerStyle={styles.input} placeholder="Enter email" />
          <Button
            mode="contained"
            title="Reset"
            onPress={() => console.log("Reset")}
            style={styles.signup}
          />
          <Button
            color={colors.secondary}
            title="Back to Home"
            onPress={() => console.log("Home")}
          />
        </Fade>
      </View>
      <View style={styles.stickmanView}>
        <Image
          source={require("../assets/images/stickman-sad.jpg")}
          style={styles.stickman}
          resizeMode="contain"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: 30,
  },
  welcomeBackView: {
    padding: 15,
    flex: 1,
  },
  stickman: {
    width: Dimensions.get("screen").width - 100,
    height: 300,
    marginTop: 50,
  },
  formView: {
    flex: 2,
    padding: 15,
  },
  input: {
    paddingVertical: 10,
    borderColor: "#abc13d",
  },
  signup: {
    marginTop: 10,
  },
  stickmanView: {
    flex: 1,
  },
  stickman: {
    height: "100%",
    width: "50%",
    bottom: 0,
  },
});

export default ResetPassword;
