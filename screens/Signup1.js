import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import Fade from "../components/Fade";
import colors from "../config/colors";

const Signup = () => {
  return (
    <Screen>
      <View style={styles.welcomeBackView}>
        <Text fontSize={30} fontFamily="Inter_900Black">
          Ready to join the colony?
        </Text>
        <Text>Tell us a little about you!</Text>
      </View>
      <View style={styles.formView}>
        <Fade ease="ease" duration={500}>
          <TextInput
            containerStyle={styles.input}
            placeholder="Enter full name"
          />

          <TextInput containerStyle={styles.input} placeholder="Enter Email" />
          <TextInput containerStyle={styles.input} placeholder="Enter Phone" />

          <Button
            mode="contained"
            title="Sign up"
            onPress={() => console.log("login")}
          />
          <View style={styles.loginView}>
            <Text>Have an account?</Text>

            <Button
              color={colors.secondary}
              title="Login"
              onPress={() => console.log("login screen")}
            />
          </View>
        </Fade>
        <Image
          source={require("../assets/images/stick-handyman.jpg")}
          style={styles.stickman}
          resizeMode="center"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcomeBackView: {
    flex: 0.2,
    padding: 15,
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
  loginView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    borderColor: "#abc13d",
  },
  stickman: {
    height: 300,
    width: 250,
  },
});

export default Signup;
