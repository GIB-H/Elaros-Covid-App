import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CupertinoButtonInfo1 from "../../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../../components/CupertinoButtonInfo";
import { useNavigation } from '@react-navigation/core';


const Breathlessness = () => {
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Cough');
  };
  return (
    
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        On a scale of 0-10, with 0 being not breathless at all, and 10 being
        extremely breathless, how breathless are you:
      </Text>
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
    height: 100,
    width: 266,
    marginTop: 69,
    marginLeft: 31
  },
  cupertinoButtonInfo1: {
    width: 100,
    height: 44
  },
  cupertinoButtonInfo: {
    width: 100,
    height: 44,
    marginLeft: 134
  },
  cupertinoButtonInfo1Row: {
    marginTop: 363,
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

export default Breathlessness;
