import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import colors from "../config/colors";
import Animate from "../components/Animate";

const Signup = () => {
  return (
    <Screen>
      <View style={styles.welcomeBackView}>
        <Text fontSize={30} fontFamily="Inter_900Black">
          One last thing!
        </Text>
        <Text>Setup your password!</Text>
      </View>
      <View style={styles.formView}>
        <View>
          <TextInput
            containerStyle={styles.input}
            placeholder="Enter Password"
          />
          <TextInput
            containerStyle={styles.input}
            placeholder="Enter Password"
          />

          <Button
            mode="contained"
            title="Sign up"
            onPress={() => console.log("login")}
            style={styles.signup}
          />
          <View style={styles.loginView}>
            <Text>Have an account?</Text>

            <Button
              color={colors.secondary}
              title="Login"
              onPress={() => console.log("pas forg")}
            />
          </View>
        </View>
        <View>
          <Animate>
            <Image
              source={require("../assets/images/stickman-padlock.jpeg")}
              style={styles.stickman}
              resizeMode="center"
            />
          </Animate>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcomeBackView: {
    flex: 0.1,
    padding: 15,
  },
  stickman: {
    width: Dimensions.get("screen").width - 100,
    height: 300,
    marginTop: 50,
  },
  formView: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
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
  signup: {
    marginTop: 30,
  },
  stickman: {
    height: 200,
    width: 500,
    bottom: 0,
  },
});

export default Signup;
