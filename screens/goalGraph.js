import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Database
import { getDocs, query, where } from 'firebase/firestore';
import { colGoalsRef, auth } from '../firebaseConfig';

function GoalGraph({ route, navigation }) {
  return <View style={styles.container}>Graph</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default GoalGraph;
