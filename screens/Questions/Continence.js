import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';


const Continence = () => {
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Pain');
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
        <Text style={styles.bowel}>Bowel</Text>
      </View>
      <View style={styles.cupertinoRadio2Row}>
        <CupertinoRadio style={styles.cupertinoRadio2}></CupertinoRadio>
        <Text style={styles.bladder}>Bladder</Text>
      </View>
      <View style={styles.cupertinoRadio3Row}>
        <CupertinoRadio style={styles.cupertinoRadio3}></CupertinoRadio>
        <Text style={styles.neither}>Neither</Text>
      </View>
      <View style={styles.loremIpsum2StackStack}>
        <View style={styles.loremIpsum2Stack}>
          <Text style={styles.loremIpsum2}>
            Which of the symptoms is the worst
          </Text>
          <CupertinoRadio style={styles.cupertinoRadio4}></CupertinoRadio>
        </View>
        <Text style={styles.bowel2}>Bowel</Text>
      </View>
      <View style={styles.cupertinoRadio5Stack}>
        <CupertinoRadio style={styles.cupertinoRadio5}></CupertinoRadio>
        <Text style={styles.bladder2}>Bladder</Text>
      </View>
      <View style={styles.cupertinoRadio6Row}>
        <CupertinoRadio style={styles.cupertinoRadio6}></CupertinoRadio>
        <Text style={styles.neither2}>Neither</Text>
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
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 300
  },
  cupertinoRadio: {
    position: "absolute",
    left: 0,
    top: 43,
    width: 40,
    height: 40
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    width: 300,
    height: 83,
    position: "absolute"
  },
  bowel: {
    top: 55,
    left: 40,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsumStackStack: {
    width: 300,
    height: 83,
    marginTop: 56,
    marginLeft: 27
  },
  cupertinoRadio2: {
    width: 40,
    height: 40
  },
  bladder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 27,
    marginRight: 260
  },
  cupertinoRadio3: {
    width: 40,
    height: 40
  },
  neither: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio3Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 262
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 224
  },
  cupertinoRadio4: {
    position: "absolute",
    left: 0,
    top: 21,
    width: 40,
    height: 40
  },
  loremIpsum2Stack: {
    top: 0,
    left: 0,
    width: 262,
    height: 61,
    position: "absolute"
  },
  bowel2: {
    top: 33,
    left: 40,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2StackStack: {
    width: 262,
    height: 61,
    marginTop: 5,
    marginLeft: 27
  },
  cupertinoRadio5: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  bladder2: {
    top: 12,
    left: 39,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio5Stack: {
    width: 87,
    height: 40,
    marginLeft: 27
  },
  cupertinoRadio6: {
    width: 40,
    height: 40
  },
  neither2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12
  },
  cupertinoRadio6Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 262
  },
  cupertinoButtonInfo1Row: {
    marginTop: 143,
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

export default Continence;
