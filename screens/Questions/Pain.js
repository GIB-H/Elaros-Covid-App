import React, { Component } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';


const Pain = () => {
  
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Anxiety');
  };
  return (

  
  <ScrollView>
  <View style={styles.container}>
    <Text style={styles.loremIpsum}>
      Have you suffered any pain due to Covid 19?
    </Text>
    <View style={styles.cupertinoRadioRow}>
      <CupertinoRadio style={styles.cupertinoRadio}></CupertinoRadio>
      <Text style={styles.chestPain}>Chest Pain</Text>
    </View>
    <View style={styles.cupertinoRadio2Row}>
      <CupertinoRadio style={styles.cupertinoRadio2}></CupertinoRadio>
      <Text style={styles.jointPain}>Joint Pain</Text>
    </View>
    <View style={styles.cupertinoRadio3Row}>
      <CupertinoRadio style={styles.cupertinoRadio3}></CupertinoRadio>
      <Text style={styles.musclePain}>Muscle Pain</Text>
    </View>
    <View style={styles.cupertinoRadio4Row}>
      <CupertinoRadio style={styles.cupertinoRadio4}></CupertinoRadio>
      <Text style={styles.headAche}>Head ache</Text>
    </View>
    <View style={styles.cupertinoRadio5Row}>
      <CupertinoRadio style={styles.cupertinoRadio5}></CupertinoRadio>
      <Text style={styles.abdominalPain}>Abdominal Pain</Text>
    </View>
    <View style={styles.cupertinoRadio6Row}>
      <CupertinoRadio style={styles.cupertinoRadio6}></CupertinoRadio>
      <Text style={styles.otherPain}>Other Pain</Text>
    </View>
    <View style={styles.cupertinoRadio7Row}>
      <CupertinoRadio style={styles.cupertinoRadio7}></CupertinoRadio>
      <Text style={styles.none}>None</Text>
    </View>
    <Text style={styles.loremIpsum3}>What Pain is the worst</Text>
    <View style={styles.cupertinoRadio8Row}>
      <CupertinoRadio style={styles.cupertinoRadio8}></CupertinoRadio>
      <Text style={styles.chestPain1}>Chest Pain</Text>
    </View>
    <View style={styles.cupertinoRadio9Stack}>
      <CupertinoRadio style={styles.cupertinoRadio9}></CupertinoRadio>
      <Text style={styles.jointPain1}>Joint Pain</Text>
    </View>
    <View style={styles.cupertinoRadio10Stack}>
      <CupertinoRadio style={styles.cupertinoRadio10}></CupertinoRadio>
      <Text style={styles.musclePain1}>Muscle Pain</Text>
    </View>
    <View style={styles.cupertinoRadio11Stack}>
      <CupertinoRadio style={styles.cupertinoRadio11}></CupertinoRadio>
      <Text style={styles.headAche1}>Head ache</Text>
    </View>
    <View style={styles.cupertinoRadio12Stack}>
      <CupertinoRadio style={styles.cupertinoRadio12}></CupertinoRadio>
      <CupertinoRadio style={styles.cupertinoRadio13}></CupertinoRadio>
      <Text style={styles.abdominalPain1}>Abdominal Pain</Text>
    </View>
    <View style={styles.cupertinoRadio14Stack}>
      <CupertinoRadio style={styles.cupertinoRadio14}></CupertinoRadio>
      <Text style={styles.otherPain1}>Other Pain</Text>
    </View>
    <View style={styles.cupertinoRadio15Row}>
      <CupertinoRadio style={styles.cupertinoRadio15}></CupertinoRadio>
      <Text style={styles.none1}>None</Text>
    </View>
    <View style={styles.cupertinoButtonInfo1Row}>
      <TouchableOpacity style={styles.button} onPress={next}>
      <Text style={styles.text2}>Next</Text>
      </TouchableOpacity>
      </View>
  </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1
},
loremIpsum: {
  fontFamily: "",
  color: "#121212",
  width: 323,
  height: 22,
  marginTop: 29,
  marginLeft: 31
},
cupertinoRadio: {
  width: 40,
  height: 40
},
chestPain: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadioRow: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 237
},
cupertinoRadio2: {
  width: 40,
  height: 40
},
jointPain: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio2Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 242
},
cupertinoRadio3: {
  width: 40,
  height: 40
},
musclePain: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio3Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 228
},
cupertinoRadio4: {
  width: 40,
  height: 40
},
headAche: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio4Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 238
},
cupertinoRadio5: {
  width: 40,
  height: 40
},
abdominalPain: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio5Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 206
},
cupertinoRadio6: {
  width: 40,
  height: 40
},
otherPain: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio6Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 239
},
cupertinoRadio7: {
  width: 40,
  height: 40
},
none: {
  fontFamily: "",
  color: "#121212",
  marginTop: 12
},
cupertinoRadio7Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 271
},
loremIpsum3: {
  fontFamily: "",
  color: "#121212",
  height: 19,
  width: 145,
  marginLeft: 31
},
cupertinoRadio8: {
  width: 40,
  height: 40
},
chestPain1: {
  fontFamily: "",
  color: "#121212",
  marginTop: 11
},
cupertinoRadio8Row: {
  height: 40,
  flexDirection: "row",
  marginTop: 1,
  marginLeft: 31,
  marginRight: 237
},
cupertinoRadio9: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40
},
jointPain1: {
  top: 11,
  left: 39,
  position: "absolute",
  fontFamily: "",
  color: "#121212"
},
cupertinoRadio9Stack: {
  width: 101,
  height: 40,
  marginLeft: 32
},
cupertinoRadio10: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40
},
musclePain1: {
  top: 11,
  left: 39,
  position: "absolute",
  fontFamily: "",
  color: "#121212"
},
cupertinoRadio10Stack: {
  width: 115,
  height: 40,
  marginLeft: 32
},
cupertinoRadio11: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40
},
headAche1: {
  top: 11,
  left: 39,
  position: "absolute",
  fontFamily: "",
  color: "#121212"
},
cupertinoRadio11Stack: {
  width: 105,
  height: 40,
  marginLeft: 32
},
cupertinoRadio12: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40
},
cupertinoRadio13: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40,
  transform: [
    {
      rotate: "2.00deg"
    }
  ]
},
abdominalPain1: {
  top: 11,
  left: 39,
  position: "absolute",
  fontFamily: "",
  color: "#121212"
},
cupertinoRadio12Stack: {
  width: 137,
  height: 40,
  marginLeft: 32
},
cupertinoRadio14: {
  position: "absolute",
  left: 0,
  top: 0,
  width: 40,
  height: 40
},
otherPain1: {
  top: 10,
  left: 39,
  position: "absolute",
  fontFamily: "",
  color: "#121212"
},
cupertinoRadio14Stack: {
  width: 104,
  height: 40,
  marginTop: 1,
  marginLeft: 32
},
cupertinoRadio15: {
  width: 40,
  height: 40
},
none1: {
  fontFamily: "",
  color: "#121212",
  marginTop: 10
},
cupertinoRadio15Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 31,
  marginRight: 271
},
cupertinoButtonInfo1Row: {
  marginTop: 20,
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

export default Pain;
