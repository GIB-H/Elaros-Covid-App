// questionnaire.js is the page users use to take the health questionnaires.

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Questionnaire(props) {
  return(
  <View style={styles.container}>
    <Text>THIS IS A Questionnaire PAGE</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Questionnaire;
