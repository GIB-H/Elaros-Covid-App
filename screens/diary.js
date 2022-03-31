// diary.js is the page used to allow users to type into their fatigue diary

import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Database
import { getDocs, query, where, orderBy } from 'firebase/firestore';
import { colDiaryRef, auth } from '../firebaseConfig';

function Diary({ route, navigation }) {
  const uId = auth.currentUser.uid;

  // Fetch Goals from Database
  const fetchData = async () => {
    const q = query(
      colDiaryRef,
      where('userId', '==', uId),
      orderBy('date', 'asc')
    );

    const querySnapshot = await getDocs(q);

    const newLogs = [];
    querySnapshot.forEach(doc => {
      const docObj = doc.data();
      const dateObj = docObj.date.toDate();
    });

    console.log('diary logs', newLogs);
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
