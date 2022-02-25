import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SignUp(props) {
  return(
  <View style={styles.container}>
    <Text>THIS IS A SIGNUP PAGE</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default SignUp;
