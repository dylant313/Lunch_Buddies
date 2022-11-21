import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

import { Profile, Field } from "./Components";


function Login(props) {

  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      style={styles.border}
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}
    >
      <Profile text={"Welcome Back!"} />

      <SafeAreaView style={styles.form}>
        <Field
          val={props.email}
          onChange={props.setEmail}
          label={"Username or Email"}
          placeholder={"johndoe@ufosc.org"}
        />
        <Field
          val={props.password}
          onChange={props.setPassword}
          label={"Password"}
          placeholder={"********"}
          secureTextEntry={true}
        />
        <SafeAreaView style={styles.button}>
          <TouchableOpacity
            onPress={() => props.onSubmitHandler()}
            style={styles.ButtonContainer}
          >
            <Text style={styles.ButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.toggleLogin()}
            style={styles.button}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function SignUp(props) {

  return (
    <LinearGradient
      style={styles.border}
      colors={["#A1DDFF", "#A1DDFF", "#0077E5"]}

    >
      <Profile text={"Sign Up!"} />

      <SafeAreaView style={styles.form}>
        <Field
          val={props.email}
          onChange={props.setEmail}
          label={"Username or Email"}
          placeholder={"johndoe@ufosc.org"}
        />
        <Field
          val={props.password}
          onChange={props.setPassword}
          label={"Password"}
          placeholder={"********"}
          secureTextEntry={true}
        />
        <Field
          val={props.confirmPassword}
          onChange={props.setConfirmPassword}
          label={"Confirm Password"}
          placeholder={"********"}
          secureTextEntry={true}
        />

        <SafeAreaView style={styles.button}>
          <TouchableOpacity
            onPress={() => props.navigateTo("Profile")}
            style={styles.ButtonContainer}
          >
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            onPress={() => props.toggleLogin()}
            style={styles.button}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  border: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#b1caf2",
    height: "100%",
    width: "100%",
  },
  form: {
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 100,
  },
  button: {
    borderRadius: 30,
    padding: 10,
    width: "50%",
    alignSelf: "center",
  },
  ButtonContainer: {
    borderRadius: 20,
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#FFB72D",
  },
  ButtonText: {
    fontSize: 18,
    fontFamily: "Jost_700Bold",
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export { Login, SignUp };
