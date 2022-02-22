import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

// required for stack navigation functionality
export default function Home({ navigation }) {

    // an example data set to show how it can be shown on various pages.
    const [dummyData, setDummyData] = useState([
        { name: "John", airflow: 4, depression: "low", key: "1"},
        { name: "Anne", airflow: 3, depression: "medium", key: "2"},
        { name: "Damien", airflow: 1, depression: "low", key: "3"},
        { name: "Link", airflow: 9, depression: "high", key: "4"},

    ]);

    return(
        <View style={globalStyles.container}>
            
            {/* shows each "Name" item in dummyData in a list */}
            <FlatList 
                data={dummyData}
                renderItem={({ item }) => (
                    // item is passed into the navigate method so that the Data page can access it.
                    // TouchableOpacity allows for the text to go more dull when it is pressed.
                    <TouchableOpacity onPress={() => navigation.navigate("Data", item)}> 
                        <Text style={globalStyles.titleText}>{ item.name }</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}