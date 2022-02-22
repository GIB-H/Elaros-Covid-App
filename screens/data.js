import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";

// required for stack navigation functionality
export default function Data({ navigation }) {

    return(
        //shows all the data passed in from home.js
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam("name") }</Text>
            <Text>{ navigation.getParam("airflow") }</Text>
            <Text>{ navigation.getParam("depression") }</Text>
        </View>
    )
}