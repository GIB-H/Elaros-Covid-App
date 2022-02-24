import React, { Component } from "react";
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const SignUp = () => {

  const navigation = useNavigation()

  const handleCreateAccount = () => {
        navigation.replace("Login")
  }


  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#f8e11b" />
      <View style={styles.background}>
          <View style={styles.elaros1Column}>
            <Text style={styles.elaros1}>elaros</Text>
            <Text style={styles.longCovidTracker1}>long-COVID tracker</Text>
            <View style={styles.form}>
              <View style={styles.nameColumn}>
                <View style={styles.name}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon5}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor="rgba(0,0,0,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.email}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon6}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(0,0,0,1)"
                    secureTextEntry={false}
                    style={styles.emailInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.nameColumnFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(0,0,0,1)"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.elaros1ColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity

              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    justifyContent: "center",
    flex: 1
  },
  rect2: {
    width: 360,
    height: 740,
    alignSelf: "center"
  },
  rect2_imageStyle: {},
  elaros1: {
    color: "#121212",
    fontSize: 74,
    marginLeft: 48
  },
  longCovidTracker1: {
    color: "#121212",
    marginLeft: 85
  },
  form: {
    height: 230,
    marginTop: 69
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  nameColumn: {},
  nameColumnFiller: {
    flex: 1
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(0,0,0,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 30,
    color: "rgba(0,0,0,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  elaros1Column: {
    marginTop: 131,
    marginLeft: 41,
    marginRight: 41
  },
  elaros1ColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.94,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 55
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(0,0,0,1)",
    alignSelf: "center"
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

export default SignUp;
