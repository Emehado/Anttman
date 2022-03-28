import React from "react";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import TextInput from "@/components/TextInput";
import colors from "@/config/colors";
import Animate from "@/components/Animate";

const Login = () => {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.welcomeBackView}>
          <Text isHeading isBold>
            Welcome back!
          </Text>
          <Text>Login to continue</Text>
          <Animate ease="ease">
            <Image
              source={require("@/assets/images/stick-handyman.jpg")}
              style={styles.stickman}
              resizeMode="center"
            />
          </Animate>
        </View>
        <View style={styles.formView}>
          <Animate ease="ease" type="slideUp">
            <TextInput
              containerStyle={styles.input}
              placeholder="Enter Email/Phone"
            />
            <TextInput
              containerStyle={styles.input}
              placeholder="Enter Password"
            />
            <Button
              mode="contained"
              title="Login"
              onPress={() => console.log("login")}
              containerStyle={styles.button}
            />
            <Button
              color={colors.secondary}
              title="Forgotten password?"
              onPress={() => console.log("pas forg")}
              containerStyle={styles.button}
            />
          </Animate>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcomeBackView: {
    flex: 1.8,
    padding: 15,
  },
  stickman: {
    width: Dimensions.get("screen").width - 100,
    height: 300,
    marginTop: 20,
  },
  formView: {
    flex: 1.5,
    padding: 15,
  },
  input: {
    marginBottom: 10,
    borderColor: "#abc13d",
  },
  button: {
    paddingTop: 10,
  },
});

export default Login;
