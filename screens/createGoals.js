// createGoals.js  is the page used to let users create goals in the application.

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CreateGoals(props) {
  return(
  <View style={styles.container}>
    <Text>THIS IS A CREATE GOALS PAGE</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default CreateGoals;