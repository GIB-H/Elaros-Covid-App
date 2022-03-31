// goals.js is the page used to let users see the goals they have set themselves and their progress.

import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

// Database
import { getDocs, orderBy, query, where, limit } from 'firebase/firestore';
import { colQuestRef, auth } from '../firebaseConfig';

// Graphs
import { LineChart } from 'react-native-chart-kit';
import { TouchableOpacity } from 'react-native-gesture-handler';

function GoalGraph({ route, navigation }) {
  const MAX_DATA = 4;
  const uId = auth.currentUser.uid;
  const scoreTitle = route.params.title;
  const [isFinished, setIsFinished] = useState(0);
  const [data, setData] = useState([
    { id: 0, score: 0, label: 'Pre Covid', date: 0, isUsed: true },
    { id: 1, score: 10, label: '28 Feb', date: 0, isUsed: true },
    { id: 2, score: 7, label: '10 Mar', date: 0, isUsed: true },
  ]); // Default values must be used

  const handlePress = (id, isUsed, label) => {
    let changeTo = true;
    if (isUsed) {
      changeTo = false;
    }

    data[id].isUsed = changeTo;
    setData(data);
    setIsFinished(isFinished + 1); // must be here otherwise the graph will not rerender

    console.log('new data', data);
  };

  const fetchData = async () => {
    const q = query(
      colQuestRef,
      where('userId', '==', uId),
      orderBy('date', 'asc')
    );

    const snapshot = await getDocs(q);

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const dataObjects = [];
    let dataId = 0;
    snapshot.forEach(doc => {
      // Score
      const score = doc.data().data[scoreTitle];

      // Date
      const dateObj = doc.data().date.toDate();
      const date = dateObj.getDate() + ' ' + months[dateObj.getMonth()];

      dataObjects.push({
        score: score,
        label: date,
        date: dateObj,
        isUsed: true,
        id: dataId,
      });
      dataId++;
    });

    // First questionnaire is always the pre covid
    dataObjects[0].label = 'Pre Covid';

    if (dataObjects.length >= MAX_DATA) {
      for (let i = MAX_DATA; i < dataObjects.length; i++) {
        // This questionaire score will not be used
        dataObjects[i].isUsed = false;
      }
    }
    setData(dataObjects);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('data:', data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{scoreTitle}</Text>
      <LineChart
        data={{
          labels: data
            .filter(data => data.isUsed)
            .map(data => {
              console.log('linechart:', data.label);
              return data.label;
            }),
          datasets: [
            {
              data: data.filter(data => data.isUsed).map(data => data.score),
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.9} // from react-native
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <Text style={styles.header}>Questionaire Dates:</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '80%' }}>
        {data.map(data => (
          <TouchableOpacity
            key={data.id}
            onPress={() => handlePress(data.id, data.isUsed, data.label)}
          >
            <Text style={data.isUsed ? styles.isUsed : styles.notUsed}>
              {data.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    fontSize: 25,
  },
  isUsed: {
    textDecorationLine: 'none',
    margin: 10,
  },
  notUsed: {
    textDecorationLine: 'line-through',
    margin: 10,
  },
  isFinishedText: {
    fontSize: 12,
  },
  header: {
    width: '100%',
    marginLeft: 50,
    marginBottom: 5,
    fontSize: 15,
    color: '#e39309',
  },
});

export default GoalGraph;
