import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, Button, Alert, FlatList, TouchableOpacity, } from "react-native";
import CupertinoRadio from "../../components/CupertinoRadio";
import CupertinoRadio1 from "../../components/CupertinoRadio";
import CupertinoRadio2 from "../../components/CupertinoRadio";
import CupertinoRadio3 from "../../components/CupertinoRadio";
import CupertinoRadio4 from "../../components/CupertinoRadio";
import { useNavigation } from '@react-navigation/core';



const PersonalInfo = () => {
  const navigation = useNavigation();
  const next = () => {
    navigation.push('Breathlessness');
  };
  return (
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >

                    <View style={styles.loremIpsum13Column}>
                    <Text>
                  We would like to collect some information about you before you
                  complete the questionnaire on the next page. Please respond to
                  the questions below to the best of your knowledge. These are
                  optional. If you prefer not to answer or do not know just skip
                  on to the question below.
                </Text>
                <Text>
 
                </Text>
                      <Text style={styles.loremIpsum13}>
                        Approximately what is your weight in kilograms?
                      </Text>
                      <View style={styles.textInput3Stack}>
                        <TextInput
                          placeholder="0"
                        ></TextInput>
                        <Text style={styles.kg1}>kg</Text>
                      </View>
                      <Text style={styles.doYouSmoke1}>Do you smoke?</Text>
                      <View style={styles.cupertinoRadio5Row}>
                        <CupertinoRadio
                          style={styles.cupertinoRadio5}
                        ></CupertinoRadio>
                        <Text style={styles.never1}>Never</Text>
                      </View>
                      <View style={styles.cupertinoRadio6Row}>
                        <CupertinoRadio1
                          style={styles.cupertinoRadio6}
                        ></CupertinoRadio1>
                        <Text style={styles.loremIpsum14}>
                          Current  Smoker
                        </Text>
                      </View>
                      <View style={styles.cupertinoRadio8Row}>
                        <CupertinoRadio2
                          style={styles.cupertinoRadio8}
                        ></CupertinoRadio2>
                        <Text style={styles.loremIpsum15}>
                          Current Occasional Smoker
                        </Text>
                      </View>
                      <View style={styles.cupertinoRadio7Row}>
                        <CupertinoRadio2
                          style={styles.cupertinoRadio7}
                        ></CupertinoRadio2>
                        <Text style={styles.exSmoker1}>EX-Smoker</Text>
                      </View>
                      <Text style={styles.loremIpsum13}>
                      Have you had any medical problems related to COVID-19 that needed admision to hospital since your illness?
                      </Text>
                      <View style={styles.cupertinoRadio9Row}>
                        <CupertinoRadio3
                          style={styles.cupertinoRadio9}
                        ></CupertinoRadio3>
                        <Text style={styles.yes1}>Yes</Text>
                        <CupertinoRadio4
                          style={styles.cupertinoRadio10}
                        ></CupertinoRadio4>
                        <Text style={styles.no11}>No</Text>
                      </View>
                      <Text style={styles.describeThemBelow2}>
                        Describe them below
                      </Text>
                      <TextInput
                        placeholder="Here"
                      ></TextInput>
                      <Text style={styles.describeThemBelow3}>
                        Please list current medications
                      </Text>
                      <TextInput style={styles.describeThemBelow4}
                        placeholder="Here"
                      ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={next}>
                <Text style={styles.text2}>Next</Text>
              </TouchableOpacity>
          </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1
  },
  loremIpsum: {
    top: 69,
    left: 38,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 710,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 771,
    width: 375
  },
  loremIpsum2: {
    top: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    bottom: 679,
    left: 31
  },
  scrollArea1: {
    top: 0,
    left: 0,
    width: 375,
    height: 710,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea1_contentContainerStyle: {
    height: 771,
    width: 375
  },
  loremIpsum13: {
    fontFamily: "",
    color: "#121212"
  },
  textInput3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    height: 39,
    width: 214,
    opacity: 0
  },
  kg1: {
    top: 10,
    left: 213,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  textInput3Stack: {
    width: 228,
    height: 39
  },
  doYouSmoke1: {
    fontFamily: "",
    color: "#121212",
    marginTop: 10
  },
  cupertinoRadio5: {
    height: 40,
    width: 40
  },
  never1: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 7,
    marginTop: 12
  },
  cupertinoRadio5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 4,
    marginRight: 229
  },
  cupertinoRadio6: {
    height: 40,
    width: 40
  },
  loremIpsum14: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 7,
    marginTop: 12
  },
  cupertinoRadio6Row: {
    height: 40,
    flexDirection: "row",
    marginRight: 118
  },
  cupertinoRadio8: {
    height: 40,
    width: 40
  },
  loremIpsum15: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 7,
    marginTop: 12
  },
  cupertinoRadio8Row: {
    height: 40,
    flexDirection: "row",
    marginRight: 96
  },
  cupertinoRadio7: {
    height: 40,
    width: 40
  },
  exSmoker1: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 7,
    marginTop: 12
  },
  cupertinoRadio7Row: {
    height: 40,
    flexDirection: "row",
    marginRight: 197
  },
  cupertinoRadio9: {
    height: 40,
    width: 40
  },
  yes1: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 7,
    marginTop: 11
  },
  cupertinoRadio10: {
    height: 40,
    width: 40,
    marginLeft: 80
  },
  no11: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  cupertinoRadio9Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 18,
    marginRight: 105
  },
  describeThemBelow2: {
    fontFamily: "",
    color: "#121212",
    marginTop: 11
  },
  textInput4: {
    fontFamily: "",
    color: "#121212",
    height: 95,
    width: 310,
    opacity: 0
  },
  describeThemBelow3: {
    fontFamily: "",
    color: "#121212",
    marginTop: 27,
    marginLeft: 2
  },
  describeThemBelow4: {
    fontFamily: "",
    color: "#121212",
    marginLeft: 2,
    marginBottom: 40
  },
  textInput5: {
    fontFamily: "",
    color: "#121212",
    height: 95,
    width: 310,
    opacity: 0,
    marginLeft: 2
  },
  loremIpsum13Column: {
    marginTop: 14,
    marginLeft: 31,
    marginRight: 32
  },
  loremIpsum12: {
    top: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    bottom: 1980,
    left: 31
  },
  loremIpsum16: {
    top: 415,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    bottom: 500,
    left: 31
  },
  loremIpsum13ColumnFiller: {
    flex: 1
  },
  loremIpsum2Stack: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    bottom: 61
  },
  loremIpsum4: {
    top: 164,
    left: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  textInput: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    height: 39,
    width: 214,
    opacity: 0
  },
  kg: {
    top: 10,
    left: 213,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  textInputStack: {
    top: 181,
    left: 31,
    width: 228,
    height: 39,
    position: "absolute"
  },
  cupertinoRadio: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 31,
    top: 251
  },
  cupertinoRadio1: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 31,
    top: 291
  },
  cupertinoRadio2: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 31,
    top: 371
  },
  doYouSmoke: {
    top: 230,
    left: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  never: {
    top: 263,
    left: 78,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  loremIpsum5: {
    top: 303,
    left: 78,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  loremIpsum8: {
    top: 343,
    left: 78,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  cupertinoRadio4: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 180,
    top: 469
  },
  exSmoker: {
    top: 383,
    left: 78,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  loremIpsum11: {
    top: 415,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    bottom: 356,
    left: 31
  },
  cupertinoRadio3: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 31,
    top: 469
  },
  yes: {
    top: 480,
    left: 78,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  no5: {
    top: 480,
    left: 220,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  describeThemBelow: {
    top: 520,
    left: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  textInput1: {
    top: 537,
    left: 31,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    height: 95,
    width: 310,
    opacity: 0
  },
  describeThemBelow1: {
    top: 659,
    left: 33,
    position: "absolute",
    fontFamily: "",
    color: "#121212"
  },
  textInput2: {
    top: 676,
    left: 33,
    position: "absolute",
    fontFamily: "",
    color: "#121212",
    height: 95,
    width: 310,
    opacity: 0
  },
  loremIpsum2StackStack: {
    width: 375,
    flex: 1,
    marginBottom: -61
  },
  loremIpsumStack: {
    width: 375,
    height: 710,
    marginTop: 45
  }
});

export default PersonalInfo;
