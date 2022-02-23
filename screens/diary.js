// diary.js is the page used to allow users to type into their fatigue diary

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Diary(props) {
  return(
  <View style={styles.container}>
    <Text>Diary screen</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Diary;
