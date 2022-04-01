import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import CupertinoRadio from "../../components/CupertinoRadio";
import { useNavigation } from '@react-navigation/core';

const Cough = () => {
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Swallowing');
  };
  return (
    
    <View style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        Do you have any of the following symptoms that are new since contracting
        the illness?{"\n"}Tick all that apply
      </Text>
      <View>

      <View style={styles.cupertinoRadioRow}>
        <CupertinoRadio style={styles.cupertinoRadio}></CupertinoRadio>
        <Text style={styles.cough}>Cough</Text>
      </View>
      <View style={styles.cupertinoRadio2Row}>
        <CupertinoRadio style={styles.cupertinoRadio2}></CupertinoRadio>
        <Text style={styles.voiceChange2}>Voice Change</Text>
      </View>
      <View style={styles.cupertinoRadio3Row}>
        <CupertinoRadio style={styles.cupertinoRadio3}></CupertinoRadio>
        <Text style={styles.noisyBreathing}>Noisy Breathing</Text>
      </View>
      <View style={styles.cupertinoRadio4Row}>
        <CupertinoRadio style={styles.cupertinoRadio4}></CupertinoRadio>
        <Text style={styles.noneOfTheAbove}>None of The Above</Text>
      </View>
      </View>
      </View>
      <View style={styles.container}>
      <Text style={styles.loremIpsum2}>Which symptom is the worst</Text>
      <View>
      <View style={styles.cupertinoRadio5Stack}>
        <CupertinoRadio style={styles.cupertinoRadio5}></CupertinoRadio>
        <Text style={styles.cough2}>Cough</Text>
      </View >
      <View style={styles.cupertinoRadio6Stack}>
        <CupertinoRadio style={styles.cupertinoRadio6}></CupertinoRadio>
        <Text style={styles.voiceChange2}>Voice Change</Text>
      </View>
      <View style={styles.cupertinoRadio7Stack}>
        <CupertinoRadio style={styles.cupertinoRadio7}></CupertinoRadio>
        <Text style={styles.noisyBreathing2}>Noisy Breathing</Text>
      </View>
      <CupertinoRadio style={styles.cupertinoRadio8}></CupertinoRadio>
      <View style={styles.cupertinoRadio9Stack}>
        <CupertinoRadio style={styles.cupertinoRadio9}></CupertinoRadio>
        <Text style={styles.noneOfTheAbove2}>None of The Above</Text>
      </View>
      </View>
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
    flex: 1,
  
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 292,
    marginTop: 29,
    marginLeft: 36
  },
  cupertinoRadio: {
    width: 40,
    height: 40
  },
  cough: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 46,
    marginTop: 11
  },
  cupertinoRadioRow: {
    height: 40,
    flexDirection: "row",
    marginLeft: 46,
    marginRight: 243
  },
  cupertinoRadio2: {
    width: 40,
    height: 40
  },
  voiceChange: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio2Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 46,
    marginRight: 203
  },
  cupertinoRadio3: {
    width: 40,
    height: 40
  },
  noisyBreathing: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio3Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 46,
    marginRight: 191
  },
  cupertinoRadio4: {
    width: 40,
    height: 40
  },
  noneOfTheAbove: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio4Row: {
    height: 40,
    flexDirection: "row",
    marginLeft: 46,
    marginRight: 170
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7,
    marginLeft: 84
  },
  cupertinoRadio5: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  cough2: {
    top: 12,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio5Stack: {
    width: 78,
    height: 40,
    marginLeft: 46
  },
  cupertinoRadio6: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  voiceChange2: {
    top: 12,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio6Stack: {
    width: 123,
    height: 40,
    marginLeft: 46
  },
  cupertinoRadio7: {
    position: "absolute",
    left: 0,
    width: 40,
    height: 40,
    top: 0
  },
  noisyBreathing2: {
    top: 12,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio7Stack: {
    width: 136,
    height: 40,
    marginLeft: 46
  },
  cupertinoRadio8: {
    width: 40,
    height: 40,
    marginTop: 90,
    marginLeft: 90
  },
  cupertinoRadio9: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  noneOfTheAbove2: {
    top: 12,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  cupertinoRadio9Stack: {
    width: 156,
    height: 40,
    marginTop: -130,
    marginLeft: 46
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

export default Cough;
