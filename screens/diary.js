// goals.js is the page used to let users see the goals they have set themselves and their progress.

import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogInfo from '../components/log-info';

// Database
import {
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db, colDiaryRef, auth } from '../firebaseConfig';

function Diary({ route, navigation }) {
  const uId = auth.currentUser.uid;
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(false);
  const [addedLog, setAddedLog] = useState(0);

  // Dates
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Fetch Goals from Database
  const fetchData = async () => {
    const q = query(
      colDiaryRef,
      where('userId', '==', uId),
      orderBy('date', 'desc')
    );

    const querySnapshot = await getDocs(q);

    const newLogs = [];
    querySnapshot.forEach(doc => {
      console.log('item', doc.data());
      const docObj = doc.data();
      const dateObj = docObj.date.toDate();

      let logo;
      let color;
      let data = [];
      if (docObj.rating === 'Bad') {
        logo = 'sentiment-very-dissatisfied';
        color = '#74c2db';
      } else if (docObj.rating === 'Meh') {
        logo = 'sentiment-neutral';
        color = '#f5eea6';
      } else if (docObj.rating === 'Good') {
        logo = 'sentiment-very-satisfied';
        color = '#6ecc94';
      }

      if (docObj.data) {
        data = docObj.data;
      }

      newLogs.push({
        date:
          weekDays[dateObj.getDay()] +
          ' ' +
          dateObj.getDate() +
          ' ' +
          months[dateObj.getMonth()],
        rating: docObj.rating,
        symptoms: docObj.symptoms,
        id: doc.id,
        logo: logo,
        color: color,
        data: data,
      });
    });

    console.log('diary logs', newLogs);
    setLogs(newLogs);
  };

  useEffect(() => {
    fetchData();
  }, [addedLog]);

  useEffect(() => {
    setError(false);
  }, [logs]);

  const handleDelete = id => {
    const docRef = doc(db, 'diary', id);

    // Delete the document from the database
    deleteDoc(docRef).then(() => {
      // Re-render the page
      const filteredLogs = logs.filter(item => item.id !== id);

      setLogs(filteredLogs);
    });
  };

  // Update Screen
  const onPressHandler = () => {
    // Get todays date
    const date = new Date();

    const nameOfDate =
      weekDays[date.getDay()] +
      ' ' +
      date.getDate() +
      ' ' +
      months[date.getMonth()];

    // User can only input in one log per day
    if (nameOfDate === logs[0].date) {
      setError(true);
    } else {
      navigation.navigate('Add Log', {
        logs: logs,
        addedLog: addedLog,
        setAddedLog: setAddedLog,
        setLogs: setLogs,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Daily Logs:</Text>

      {logs.length === 0 && (
        <View style={styles.noLogs}>
          <Text style={styles.noLogsText}>
            You have no logs. Click the button below to add a daily log
          </Text>
        </View>
      )}

      {logs.length > 0 && (
        <View style={styles.diaryLogs}>
          <FlatList
            data={logs}
            renderItem={({ item }) => (
              <LogInfo key={item.id} item={item} handleDelete={handleDelete} />
            )}
          />
        </View>
      )}

      {/* Button */}
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Log</Text>
        </View>
      </TouchableOpacity>

      {error && (
        <Text style={styles.error}>You can only add one log per day</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  diaryLogs: {
    marginTop: 5,
    marginBottom: 5,
    height: 490,
    padding: 16,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  noLogs: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 450,
  },
  noLogsText: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Diary;
