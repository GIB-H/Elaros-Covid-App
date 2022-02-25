import React, { useState } from "react";
import { StyleSheet, Button, View, Text, Alert, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../styles/card';
import { CurrentRenderContext } from "@react-navigation/native";

// required for stack navigation functionality
export default function Home({ navigation }) {


//     // an example data set to show how it can be shown on various pages.
//     const [dummyData, setDummyData] = useState([
//         { name: "John", airflow: 4, depression: "low", key: "1"},
//         { name: "Anne", airflow: 3, depression: "medium", key: "2"},
//         { name: "Damien", airflow: 1, depression: "low", key: "3"},
//         { name: "Link", airflow: 9, depression: "high", key: "4"},

// ]);

    return(
        <View style={globalStyles.container}>
            <text>Welcome John to your Elaros Covid App Homepage! </text>
            <text>Below are some explainations for the different areas of this App, and how you should use them</text>
            <Card>
                <Text>Here you can take a questionaire which we can use to figure out what issues you are facing</Text>
                <TouchableOpacity style ={{ height: 20, width:80, marginTop: 10, backgroundColor: "orange"}}>
                    <Text>Questionaire</Text>
                </TouchableOpacity>
            </Card>
            <Card>
                <Text>Here is where you can access your current and future goals</Text>
                <TouchableOpacity style ={{ height: 20, width:80, marginTop: 10, backgroundColor: "orange"}}>
                    <Text>Goals</Text>
                </TouchableOpacity>
            </Card>
            <Card>
                <Text>Here are graphs that can let you view your data</Text>
                <TouchableOpacity style ={{ height: 20, width:80, marginTop: 10, backgroundColor: "orange"}}>
                    <Text>Graphs</Text>
                </TouchableOpacity>
            </Card>


        </View>
    )
}