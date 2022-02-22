import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";

export default function Review({ navigation }) {

    const pressHandler = () => {
        navigation.goBack(); // pops the screen off the nav stack
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Screen</Text>
            <Button title="Back to home screen" onPress={pressHandler} />
        </View>
    )
}