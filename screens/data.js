import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";

export default function Data({ navigation }) {

    return(
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam("name") }</Text>
            <Text>{ navigation.getParam("airflow") }</Text>
            <Text>{ navigation.getParam("depression") }</Text>
        </View>
    )
}