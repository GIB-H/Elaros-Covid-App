import React, { useState } from "react";
import { StyleSheet, Button, View, Text, Alert, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../styles/card';
import { CurrentRenderContext } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";


function Home(props) {
    return(
        <View style={globalStyles.container}>
            <Text>Welcome John to your Elaros Covid App Homepage! </Text>
            <Text>Below are some explainations for the different areas of this App, and how you should use them</Text>
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
    );
}

export default Home;