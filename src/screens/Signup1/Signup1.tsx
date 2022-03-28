import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import TextInput from "@/components/TextInput";
import Animate from "@/components/Animate";
import colors from "@/config/colors";
import styles from "./styles";

interface Signup1Props {}

const Signup: React.FC<Signup1Props> = () => {
  return (
    <Screen>
      <View style={styles.welcomeBackView}>
        <Text fontSize={25}>Ready to join the colony?</Text>
        <Text>Tell us a little about you!</Text>
      </View>
      <View style={styles.formView}>
        <Animate type="fadeOut" ease="ease" duration={500}>
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
        </Animate>
        <Animate>
          <Image
            source={require("@/assets/images/stick-handyman.jpg")}
            style={styles.stickman}
            resizeMode="center"
          />
        </Animate>
      </View>
    </Screen>
  );
};

export default Signup;
