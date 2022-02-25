// goals.js is the page used to let users see the goals they have set themselves and their progress.

import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper"
import GoalInfo from "../components/goal-info";



function Goals(props) {
  const [goals, setGoals] = useState([
    {title: "Breathing", progress: 30, icon: "cloud", targetDate: "29 Feburary 2022"},
    {title: "Nutrition", progress: 75, icon: "restaurant", targetDate: "3 March 2022"},
    {title: "Mobility", progress: 30, icon: "directions-walk", targetDate: "12 March 2022"},
    {title: "Cough", progress: 12, icon: "masks", targetDate: "23 March 2022"},
  ])
  const [search, setSearch] = useState(""); 
  const [filteredGoals, setFilteredGoals] = useState(goals); // this is needed because we dont want to overwrite the goals object forever - just the actual view for a certain time 

  const updateGoals = (search) => {
    setSearch(search)
    if(search) {
        // Search is not blank 
        const newGoals = goals.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredGoals(newGoals);
    } 
    else{
      setFilteredGoals(goals);
    }
  }

  const onPressHandler = () => {
    props.navigation.navigate('Create Goals')
  }

  return (
  <View style={styles.container}>
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Find Goal..." onChangeText={updateGoals} value={search}/>
    </View>
    <View style={styles.goals}>
      <FlatList
        data={filteredGoals}
        renderItem={({item}) => <GoalInfo item={item} />}
        keyExtractor={(item) => item.title}
      />
    </View>

    {/* Button (WILL BE A COMPONENT SOON) */}
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.button} >
        <Text style={styles.buttonText}>Add Goal</Text>
      </View>
    </TouchableOpacity>

  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: "#fff", 
    marginHorizontal: 20,
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 16, 
    textAlign: 'center',
  }
});

export default Goals;