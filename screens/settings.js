import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Settings(props) {
  return(
  <View style={styles.container}>
    <Text>SOME SETTINGS HERE INNIT</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250,175,65,1)"
  }
});

export default Settings;
