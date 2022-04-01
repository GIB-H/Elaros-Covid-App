import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';

const Depression = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
      On a scale of 0-10, how severe is any depresion you are experienceing
      </Text>

      <Text style={styles.loremIpsum2}>
      Are you having thoughts of self harm
      </Text>
      <View style={styles.cupertinoRadio3Stack}>
        <CupertinoRadio style={styles.cupertinoRadio3}></CupertinoRadio>
        <Text style={styles.yes2}>Yes</Text>
      </View>
      <View style={styles.cupertinoRadio4Stack}>
        <CupertinoRadio style={styles.cupertinoRadio4}></CupertinoRadio>
        <Text style={styles.no5}>No</Text>
      </View>
      <View style={styles.cupertinoButtonInfo1Row}>
      <TouchableOpacity style={styles.button} onPress={next}>
      <Text style={styles.text2}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 297,
    height: 34,
    marginTop: 69,
    marginLeft: 31
  },
  cupertinoRadio: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  yes: {
    top: 11,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadioStack: {
    width: 57,
    height: 40,
    marginLeft: 31
  },
  cupertinoRadio2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  no3: {
    top: 11,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio2Stack: {
    width: 53,
    height: 40,
    marginLeft: 31
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 267,
    marginTop: 90,
    marginLeft: 31
  },
  cupertinoRadio3: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  yes2: {
    top: 12,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio3Stack: {
    width: 57,
    height: 40,
    marginLeft: 31
  },
  cupertinoRadio4: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  no5: {
    top: 12,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio4Stack: {
    width: 53,
    height: 40,
    marginLeft: 31
  },
  cupertinoButtonInfo1Row: {
    marginTop: 180,
    marginLeft: 20,
    marginRight: 21
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  button: {
    height: 59,
    backgroundColor: 'rgba(3,3,3,1)',
    borderRadius: 5,
    opacity: 0.94,
    justifyContent: 'center',
  }
});

export default Depression;
