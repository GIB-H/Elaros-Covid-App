import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {

    const [dummyData, setDummyData] = useState([
        { name: "John", airflow: 4, depression: "low", key: "1"},
        { name: "Anne", airflow: 3, depression: "medium", key: "2"},
        { name: "Damien", airflow: 1, depression: "low", key: "3"},
        { name: "Link", airflow: 9, depression: "high", key: "4"},

    ]);

    return(
        <View style={globalStyles.container}>
            
            <FlatList 
                data={dummyData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Data", item)}>
                        <Text style={globalStyles.titleText}>{ item.name }</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}