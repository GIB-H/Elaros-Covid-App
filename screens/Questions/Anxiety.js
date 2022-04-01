import React, { Component } from "react";
import { StyleSheet, View,TouchableOpacity, Text } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';


const Anxiety = () => {
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Home Screen');
  };
  return (    
  <View style={styles.container}>
    <Text style={styles.loremIpsum}>
    On a scale of 0-10, how severe is any anxiety you are experienceing
    </Text>

    <View style={styles.cupertinoButtonInfo1Row}>
    <TouchableOpacity style={styles.button} onPress={next}>
    <Text style={styles.text2}>Finish</Text>
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
  fontFamily: "",
  color: "#121212",
  height: 40,
  width: 323,
  marginTop: 39,
  marginLeft: 31
},
cupertinoRadio: {
  width: 40,
  height: 40
},
yes: {
  fontFamily: "",
  color: "#121212",
  marginTop: 11
},
cupertinoRadioRow: {
  height: 40,
  flexDirection: "row",
  marginTop: 1,
  marginLeft: 20,
  marginRight: 293
},
cupertinoRadio2: {
  width: 40,
  height: 40
},
no3: {
  fontFamily: "",
  color: "#121212",
  marginTop: 11
},
cupertinoRadio2Row: {
  height: 40,
  flexDirection: "row",
  marginLeft: 20,
  marginRight: 297
},
cupertinoButtonInfo1Row: {
  marginTop: 420,
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

export default Anxiety;
