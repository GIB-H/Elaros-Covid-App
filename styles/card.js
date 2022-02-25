// card.js is the style for the goals cards.

import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor:'#fff',
        elevation: 4,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        marginTop: 10
    },
    cardContent: {

    }
});