import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Review") // adds new screen to nav stack
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="go to review" onPress={pressHandler} />
        </View>
    )
}