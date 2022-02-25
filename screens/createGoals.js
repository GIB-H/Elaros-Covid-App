// createGoals.js  is the page used to let users create goals in the application.


import React, {useState} from "react"; 
import {View, Text, StyleSheet, Platform} from "react-native"
import { MaterialIcons} from 'react-native-vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

function CreateGoals(props) {
  // State for drop down list for symptoms 
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState( [
    {label: 'Breathing', value: 'Breathing', icon: () => <MaterialIcons name={'cloud'} color={'black'} />}, 
    {label: 'Cough', value: 'Cough', icon: () => <MaterialIcons name={'masks'} color={'black'}  />}, 
    {label: 'Nutrition', value: 'Nutrition' , icon: () => <MaterialIcons name={'restaurant'} color={'black'}  />}, 
    {label: 'Fatigue', value: 'Fatigue', icon: () => <MaterialIcons name={'single-bed'} color={'black'}  />}, 
    {label: 'Continence', value: 'Continence', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Pain', value: 'Pain', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Cognition', value: 'Cognition', icon: () => <MaterialIcons name={'psychology'} color={'black'}  />}, 
    {label: 'Anxiety', value: 'Anxiety', icon: () => <MaterialIcons name={'spa'} color={'black'}  />}, 
    {label: 'Depression', value: 'Depression', icon: () => <MaterialIcons name={'spa'} color={'black'}  />}, 
    {label: 'PTSD Screen', value: 'PTSD Screen', icon: () => <MaterialIcons name={'flag'} color={'black'}  />}, 
    {label: 'Communication', value: 'Communication', icon: () => <MaterialIcons name={'people'} color={'black'}  />}, 
    {label: 'Mobility', value: 'Mobility', icon: () => <MaterialIcons name={'directions-walk'} color={'black'}  />}, 
    {label: 'Personal-Care', value: 'Personal-Care', icon: () => <MaterialIcons name={'soap'} color={'black'}  />}, 
    {label: 'Activities', value: 'Activities', icon: () => <MaterialIcons name={'fitness-center'} color={'black'}  />}, 
  ]);

  // Date List 
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userSetDate, setUserSetDate] = useState(false); // user has not set a date yet 

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
    if(event.type === "set"){
      setUserSetDate(true);
    } 
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 

  return(
    <View style={styles.container}>
      <View style={styles.plus}>
        <View style={styles.plusIcon}>
          <MaterialIcons name={'add'} size={100} />
        </View>
      </View> 
      <Text style={styles.message}>Goals are a great way to track your recovery process</Text>
    
      <View style={styles.dropDownContainer}>
          <DropDownPicker maxHeight={155} placeholder={"Name of Symptom"} open={open} items={items} value={value} setValue={setValue} setItems={setItems} setOpen={setOpen} showArrowIcon={true}></DropDownPicker>
      </View>
    
      <View style={styles.dateContainer}>
            <Text>Target Date{userSetDate && ": " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()}</Text>
            <IconButton style={styles.dateIcon} color={'white'} onPress={() => setShowDate(true)} size={25} icon={'calendar-today'} />
            <View style={styles.dateLine}></View>
      </View>

      {/* Button (WILL BE A COMPONENT SOON) */}
      <TouchableOpacity>
        <View style={styles.button} >
          <Text style={styles.buttonText}>Sumbmit</Text>
        </View>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    elevation: 3, // how much it comes away from the screen 
    backgroundColor: "#ECFAFF", 
    marginBottom: 15,
    flexDirection: "row",
    borderWidth: 1.5
  },
  cardContent: {
    marginVertical: 20,
    marginLeft: 40,
    height: 130,
    justifyContent: "space-between"
  },
  title: {
    color: "#537685",
    fontSize: 24,
  },
  date: {
    color: "#537685",
    fontSize: 12, 
  },
  targetDate: {
    color: "#537685", 
    fontSize: 18, 
  },
  progressContainer: {
      position: "absolute",
      right: 20,
      bottom: 40
  },
  icon: {
    position: "absolute",
    right: 50,
    bottom: 70
  }
})

export default CreateGoals;