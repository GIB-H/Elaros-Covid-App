// diary.js is the page used to allow users to type into their fatigue diary

import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Database
import { getDocs, query, where } from 'firebase/firestore';
import { colDiaryRef, auth } from '../firebaseConfig';

function Diary({ route, navigation }) {
  const uId = auth.currentUser.uid;

  // Fetch Goals from Database
  const fetchData = async () => {
    const q = query(colDiaryRef, where('userId', '==', uId));

    const querySnapshot = await getDocs(q);

    const newLogs = [];
    querySnapshot.forEach(doc => {
      newLogs.push(doc.data());
    });

    console.log(newLogs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Diary</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Diary;
