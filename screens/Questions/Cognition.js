import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';

const Cognition = () => {
    const navigation = useNavigation();
  const next = () => {
    navigation.push('Continence');
  };
  return (
    <View style={styles.container}>
      <View style={styles.loremIpsumStackStack}>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}>
            Since your illness are you having any new problems with any of the
            following?
          </Text>
          <CupertinoRadio style={styles.cupertinoRadio}></CupertinoRadio>
        </View>
        <Text style={styles.consentration}>Consentration</Text>
      </View>
      <View style={styles.cupertinoRadio2Row}>
        <CupertinoRadio style={styles.cupertinoRadio2}></CupertinoRadio>
        <Text style={styles.planning}>Planning</Text>
      </View>
      <View style={styles.cupertinoRadio3Row}>
        <CupertinoRadio style={styles.cupertinoRadio3}></CupertinoRadio>
        <Text style={styles.shortTermMemory}>Short Term Memory</Text>
      </View>
      <View style={styles.cupertinoRadio4Row}>
        <CupertinoRadio style={styles.cupertinoRadio4}></CupertinoRadio>
        <Text style={styles.neither}>Neither</Text>
      </View>
      <Text style={styles.loremIpsum2}>Which symptom is the worst</Text>
      <View style={styles.cupertinoRadio5StackRow}>
        <View style={styles.cupertinoRadio5Stack}>
          <CupertinoRadio style={styles.cupertinoRadio5}></CupertinoRadio>
          <Text style={styles.loremIpsum3}></Text>
        </View>
        <Text style={styles.consentration1}>Consentration</Text>
      </View>
      <View style={styles.cupertinoRadio6Row}>
        <CupertinoRadio style={styles.cupertinoRadio6}></CupertinoRadio>
        <Text style={styles.shortTermMemory1}>Short Term Memory</Text>
      </View>
      <View style={styles.cupertinoRadio7Row}>
        <CupertinoRadio style={styles.cupertinoRadio7}></CupertinoRadio>
        <Text style={styles.planning1}>Planning</Text>
      </View>
      <View style={styles.cupertinoRadio8Row}>
        <CupertinoRadio style={styles.cupertinoRadio8}></CupertinoRadio>
        <Text style={styles.neither1}>Neither</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    height: 39,
    width: 262
  },
  cupertinoRadio: {
    position: "absolute",
    left: 0,
    top: 38,
    width: 40,
    height: 40
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    width: 262,
    height: 78,
    position: "absolute"
  },
  consentration: {
    top: 50,
    left: 40,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  loremIpsumStackStack: {
    width: 262,
    height: 78,
    marginTop: 69,
    marginLeft: 39
  },
  cupertinoRadio2: {
    width: 40,
    height: 40
  },
  planning: {
    fontFamily: "",
    color: "#121212",
    marginTop: 12
  },
  cupertinoRadio2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 39,
    marginRight: 242
  },
  cupertinoRadio3: {
    width: 40,
    height: 40
  },
  shortTermMemory: {
    fontFamily: "",
    color: "#121212",
    marginTop: 12
  },
  cupertinoRadio3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: -80,
    marginLeft: 39,
    marginRight: 172
  },
  cupertinoRadio4: {
    width: 40,
    height: 40
  },
  neither: {
    fontFamily: "",
    color: "#121212",
    marginTop: 12
  },
  cupertinoRadio4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 39,
    marginRight: 251
  },
  loremIpsum2: {
    fontFamily: "",
    color: "#121212",
    height: 19,
    width: 231,
    marginLeft: 39
  },
  cupertinoRadio5: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  loremIpsum3: {
    top: 16,
    left: 35,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  cupertinoRadio5Stack: {
    width: 40,
    height: 40
  },
  consentration1: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio5StackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 39,
    marginRight: 209
  },
  cupertinoRadio6: {
    width: 40,
    height: 40
  },
  shortTermMemory1: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio6Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: 172
  },
  cupertinoRadio7: {
    width: 40,
    height: 40
  },
  planning1: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio7Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: 242
  },
  cupertinoRadio8: {
    width: 40,
    height: 40
  },
  neither1: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio8Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: 251
  }
});


export default Cognition;
