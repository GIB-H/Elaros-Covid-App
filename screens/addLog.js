// addLog.js is the page used to let users create logs in the application.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

// Database
import { addDoc } from 'firebase/firestore';

// Database
import { colDiaryRef, auth } from '../firebaseConfig';

function AddLog({ route, navigation }) {
  const uId = auth.currentUser.uid;

  const { logs, setLogs, setAddedLog, addedLog } = route.params;

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

  // State for drop down list for symptoms
  const defaultSymptomItems = [
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

  // sets rating values for drop down list
  const defaultRatingItems = [
    {
      label: 'Bad',
      value: 'Bad',
      icon: () => (
        <MaterialIcons name={'sentiment-very-dissatisfied'} color={'black'} />
      ),
    },
    {
      label: 'Meh',
      value: 'Meh',
      icon: () => <MaterialIcons name={'sentiment-neutral'} color={'black'} />,
    },
    {
      label: 'Good',
      value: 'Good',
      icon: () => (
        <MaterialIcons name={'sentiment-very-satisfied'} color={'black'} />
      ),
    },
  ];

  // Symptoms
  const [symptomValue, setSymptomValue] = useState([]);
  const [symptomOpen, setSymptomOpen] = useState(false);
  const [symptomItems, setSymptomItems] = useState(defaultSymptomItems);

  // Rating
  const [ratingValue, setRatingValue] = useState(null);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [ratingItems, setRatingItems] = useState(defaultRatingItems);

  // Input
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  // Remove the error
  useEffect(() => {
    setError(false);
  }, [symptomValue, ratingValue, text]);

  // Submit
  const handlePress = () => {
    if (symptomValue.length > 0 && ratingValue) {
      // Add the new daily log
      const date = new Date();
      let textData = [];
      if (text.trim().length > 0) {
        textData[0] = text;
      }
      const newLog = {
        date: date,
        data: textData,
        userId: uId,
        symptoms: symptomValue,
        rating: ratingValue,
      };
      // Add the new Goal to the database
      addDoc(colDiaryRef, newLog);

      // Fomrat the date
      newLog.date =
        newLog.date.getDate() +
        ' ' +
        monthNames[newLog.date.getMonth()] +
        ' ' +
        newLog.date.getFullYear();

      console.log('new log', newLog);

      // Update Logs
      const newLogs = [];
      newLogs.push(newLog);
      logs.forEach(log => newLogs.push(log));

      setLogs(newLogs);

      setAddedLog(addedLog + 1);

      // Go back to logs page
      navigation.goBack();
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.plus}>
        <View style={styles.plusIcon}>
          <MaterialIcons name={'add'} size={100} />
        </View>
      </View>
      <Text style={styles.message}>
        Daily Logs help you keep track on your symptoms
      </Text>
      <View style={styles.inputContainer}>
        <EvilIconsIcon name='comment' style={styles.icon}></EvilIconsIcon>
        <TextInput
          placeholder='Comment about day..'
          placeholderTextColor='rgba(45,45,45,1)'
          secureTextEntry={false}
          style={styles.input}
          onChangeText={text => setText(text)}
          maxLength={100}
        ></TextInput>
      </View>
      <View style={styles.dropDownContainer}>
        <DropDownPicker
          maxHeight={155}
          placeholder={'Struggling Symptoms'}
          items={symptomItems}
          open={symptomOpen}
          value={symptomValue}
          setOpen={setSymptomOpen}
          setItems={setSymptomItems}
          setValue={setSymptomValue}
          multiple={true}
          min={0}
          max={8}
          zIndex={1000}
        ></DropDownPicker>
      </View>

      <View style={styles.dropDownContainer}>
        <DropDownPicker
          maxHeight={80}
          placeholder={'Rate Your Day'}
          items={ratingItems}
          open={ratingOpen}
          value={ratingValue}
          setOpen={setRatingOpen}
          setItems={setRatingItems}
          setValue={setRatingValue}
          zIndex={500}
        ></DropDownPicker>
      </View>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit Log</Text>
        </View>
      </TouchableOpacity>
      {error && (
        <Text style={styles.error}>Please enter symptoms and a rating</Text>
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

  // TITLE
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
    marginTop: 40,
    width: 300,
  },

  // BUTTON
  button: {
    marginTop: 50,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    width: 300,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  // INPUT
  inputContainer: {
    marginTop: 30,
    height: 59,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    width: 300,
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    marginLeft: 20,
    alignSelf: 'center',
  },
  input: {
    height: 30,
    color: 'rgba(0,0,0,1)',
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },

  // ERROR
  error: {
    color: 'red',
  },
});

export default AddLog;
