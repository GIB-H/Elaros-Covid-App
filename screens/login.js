// login.js is the page users use to log into the application

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Login(props) {
  return(
  <View style={styles.container}>
    <Text>THIS IS A LOGIN PAGE</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Login;
