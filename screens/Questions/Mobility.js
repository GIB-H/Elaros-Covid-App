import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";


const Mobility = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cupertinoButtonInfo1Row}>
        <CupertinoButtonInfo1
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo1>
        <CupertinoButtonInfo
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo>
      </View>
      <Text style={styles.loremIpsum1}>
        On a scale of 0-10, how severe are any problems you have in walking or
        moving without mobility aids?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 100
  },
  cupertinoButtonInfo2: {
    height: 44,
    width: 100,
    marginLeft: 134
  },
  cupertinoButtonInfo1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 632,
    marginLeft: 20,
    marginRight: 21
  },
  loremIpsum1: {
    fontFamily: "",
    color: "#121212",
    flex: 1,
    marginBottom: 693,
    marginTop: -607,
    marginLeft: 39
  }
});

export default Mobility;
