// settings.js is the page users use to interact with the setttings and log out of the application.
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Authentication
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Settings({ route, navigation }) {
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(err => console.log('error'));
  };

  return (
    <View style={styles.container}>
      {/* Button */}
      <TouchableOpacity onPress={signOutHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
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

  // BUTTON
  button: {
    marginTop: 20,
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

export default Settings;
