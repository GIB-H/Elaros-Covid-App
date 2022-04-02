// goals.js is the page used to let users see the goals they have set themselves and their progress.

import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import GoalInfo from '../components/goal-info';

// Database
import { getDocs, query, where } from 'firebase/firestore';
import { colGoalsRef, auth } from '../firebaseConfig';

function Goals({ route, navigation }) {
  const uId = auth.currentUser.uid;

  const [goals, setGoals] = useState([]);
  const [filteredGoals, setFilteredGoals] = useState(goals);
  const [search, setSearch] = useState('');

  // Fetch Goals from Database
  const fetchData = async () => {
    const q = query(colGoalsRef, where('userId', '==', uId));

    const querySnapshot = await getDocs(q);

    const newGoals = [];
    querySnapshot.forEach(doc => {
      newGoals.push(doc.data());
    });

    setGoals(newGoals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Redirect to goal graph
  const handlePress = title => {
    // Pass in the title of that goal to the new page
    navigation.navigate('Goal Graph', {
      title: title,
    });
  };

  // Filter Goals
  useEffect(() => {
    let newFilteredGoals = [];
    if (goals.length > 0) {
      newFilteredGoals = goals.filter(goal => {
        return goal.title.toLowerCase().includes(search);
      });

      // Sort list alphabeticaly
      newFilteredGoals.sort((a, b) => (a.title > b.title ? 1 : 1));
    }

    setFilteredGoals(newFilteredGoals);
  }, [goals, search]);

  // Update Search
  const handleSearch = search => {
    setSearch(search.toLowerCase());
  };

  // Update Screen
  const onPressHandler = () => {
    console.log('pressed');
    navigation.navigate('Create Goals', {
      goals: goals,
      setGoals: setGoals,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {goals.length > 0 && (
          <Searchbar
            placeholder='Find Goal...'
            onChangeText={handleSearch}
            value={search}
          />
        )}
      </View>

      {goals.length === 0 && (
        <View style={styles.noGoals}>
          <Text style={styles.noGoalsText}>
            You have no goals. Click the button below to add your first goal
          </Text>
        </View>
      )}

      {goals.length > 0 &&
        (console.log('executing', goals),
        (
          <View style={styles.goals}>
            <FlatList
              data={filteredGoals}
              renderItem={({ item }) => (
                <GoalInfo item={item} handlePress={handlePress} />
              )}
              keyExtractor={item => item.title}
            />
          </View>
        ))}
      {}

      {/* Button (WILL BE A COMPONENT SOON) */}
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Goal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
  },
  goals: {
    marginTop: 20,
    height: 405,
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
  noGoals: {
    alignItems: 'center',
    marginBottom: 450,
    marginHorizontal: 10,
  },
  noGoalsText: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Goals;
