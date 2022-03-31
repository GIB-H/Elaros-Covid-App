// createGoals.js  is the page used to let users create goals in the application.
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Database
import {
  addDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from 'firebase/firestore';
import { colGoalsRef, colQuestRef, auth } from '../firebaseConfig';

function CreateGoals({ route, navigation }) {
  const uId = auth.currentUser.uid;

  const { goals, setGoals } = route.params;

  // Retriving the progress
  const fetchProgress = async () => {
    console.log('fetching data for create goal');
    const q = query(
      colQuestRef,
      where('userId', '==', uId),
      orderBy('date', 'desc'),
      limit(1)
    );

    const snapshot = await getDocs(q);

    return snapshot;
  };

  // Add a goal to the database
  const submitHandler = async () => {
    // Check that a date and a value for a symptom has been created
    if (date && value) {
      // Format the date into a readable form
      const formattedDate =
        date.getDate() +
        ' ' +
        monthNames[date.getMonth()] +
        ' ' +
        date.getFullYear();

      // Retrieve the icon from the given selected symptom
      const icon = defaultItems.find(item => item.value === value).iconValue;

      const snapshot = fetchProgress();

      let progress = 0;
      (await snapshot).forEach(doc => {
        progress = doc.data().data[value] * 10;
        console.log(progress);
      });

      // New Goal Object
      const newGoal = {
        title: value,
        targetDate: formattedDate,
        icon: icon,
        progress: progress, // corresponds to the latest questionaire score
        userId: uId,
      };
      console.log('new goal', newGoal);

      // Update Goals
      const newGoals = [];
      goals.forEach(goal => newGoals.push(goal));
      newGoals.push(newGoal);
      setGoals(newGoals);

      // Add the new Goal to the database
      addDoc(colGoalsRef, newGoal).then(
        // Go back to goals page
        navigation.goBack()
      );
    }
  };

  // State for drop down list for symptoms
  const defaultItems = [
    {
      label: 'Breathing',
      value: 'Breathing',
      iconValue: 'cloud',
      icon: () => <MaterialIcons name={'cloud'} color={'black'} />,
    },
    {
      label: 'Cough',
      value: 'Cough',
      iconValue: 'masks',
      icon: () => <MaterialIcons name={'masks'} color={'black'} />,
    },
    {
      label: 'Nutrition',
      value: 'Nutrition',
      iconValue: 'restaurant',
      icon: () => <MaterialIcons name={'restaurant'} color={'black'} />,
    },
    {
      label: 'Fatigue',
      value: 'Fatigue',
      iconValue: 'single-bed',
      icon: () => <MaterialIcons name={'single-bed'} color={'black'} />,
    },
    {
      label: 'Continence',
      value: 'Continence',
      iconValue: 'flag',
      icon: () => <MaterialIcons name={'flag'} color={'black'} />,
    },
    {
      label: 'Pain',
      value: 'Pain',
      iconValue: 'flag',
      icon: () => <MaterialIcons name={'flag'} color={'black'} />,
    },
    {
      label: 'Cognition',
      value: 'Cognition',
      iconValue: 'psychology',
      icon: () => <MaterialIcons name={'psychology'} color={'black'} />,
    },
    {
      label: 'Anxiety',
      value: 'Anxiety',
      iconValue: 'spa',
      icon: () => <MaterialIcons name={'spa'} color={'black'} />,
    },
    {
      label: 'Depression',
      value: 'Depression',
      iconValue: 'spa',
      icon: () => <MaterialIcons name={'spa'} color={'black'} />,
    },
    {
      label: 'PTSD Screen',
      value: 'PTSD Screen',
      iconValue: 'flag',
      icon: () => <MaterialIcons name={'flag'} color={'black'} />,
    },
    {
      label: 'Communication',
      value: 'Communication',
      iconValue: 'people',
      icon: () => <MaterialIcons name={'people'} color={'black'} />,
    },
    {
      label: 'Mobility',
      value: 'Mobility',
      iconValue: 'directions-walk',
      icon: () => <MaterialIcons name={'directions-walk'} color={'black'} />,
    },
    {
      label: 'Personal-Care',
      value: 'Personal-Care',
      iconValue: 'soap',
      icon: () => <MaterialIcons name={'soap'} color={'black'} />,
    },
    {
      label: 'Activities',
      value: 'Activities',
      iconValue: 'fitness-center',
      icon: () => <MaterialIcons name={'fitness-center'} color={'black'} />,
    },
  ];

  // Filtering Items
  const filteredGoals = defaultItems.filter(item => {
    return goals.every(goal => {
      return item.label !== goal.title;
    });
  });

  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(filteredGoals);

  // Date List
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userSetDate, setUserSetDate] = useState(false); // user has not set a date yet

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
    if (event.type === 'set') {
      setUserSetDate(true);
    }
  };

  const monthNames = [
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

  return (
    <View style={styles.container}>
      <View style={styles.plus}>
        <View style={styles.plusIcon}>
          <MaterialIcons name={'add'} size={100} />
        </View>
      </View>
      <Text style={styles.message}>
        Goals are a great way to track your recovery process
      </Text>

      <View style={styles.dropDownContainer}>
        <DropDownPicker
          maxHeight={155}
          placeholder={'Name of Symptom'}
          open={open}
          items={items}
          value={value}
          setValue={setValue}
          setItems={setItems}
          setOpen={setOpen}
          showArrowIcon={true}
        ></DropDownPicker>
      </View>

      <View style={styles.dateContainer}>
        <Text>
          Target Date
          {userSetDate &&
            ': ' +
              date.getDate() +
              ' ' +
              monthNames[date.getMonth()] +
              ' ' +
              date.getFullYear()}
        </Text>
        <IconButton
          style={styles.dateIcon}
          color={'white'}
          onPress={() => setShowDate(true)}
          size={25}
          icon={'calendar-today'}
        />
        <View style={styles.dateLine}></View>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={submitHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sumbmit Goal</Text>
        </View>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={'date'}
          is24Hour={true}
          display='default'
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250,175,65,1)',
    alignItems: 'center',
  },

  // GOAL TITLE
  plus: {
    width: 117,
    height: 111,
    borderRadius: 64.5,
    backgroundColor: '#fff',
    borderWidth: 2,
    marginTop: 50,
    marginBottom: 20,
  },
  plusIcon: {
    position: 'absolute',
    left: 5,
  },
  message: {
    fontSize: 15,
    width: 250,
    textAlign: 'center',
  },

  // DROP DOWN MENU
  dropDownContainer: {
    marginTop: 50,
    width: 300,
  },

  // DATE
  dateContainer: {
    marginTop: 155,
    marginBottom: 40,
  },
  dateLine: {
    borderWidth: 1,
    height: 2,
    marginTop: 5,
    width: 300,
    borderColor: '#fff',
  },
  dateIcon: {
    position: 'absolute',
    right: 0,
    top: -18,
  },

  // BUTTON
  button: {
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderWidth: 2,
    width: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CreateGoals;
