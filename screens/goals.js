import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Goals(props) {
  return(
  <View style={styles.container}>
    <Text>THIS HAS ISAACS GOALS ON IT</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Goals;