// home.js is the main page users see when they log into the application.

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Home(props) {
  return(
  <View style={styles.container}>
    <Text>HOMESCREEN</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Home;
