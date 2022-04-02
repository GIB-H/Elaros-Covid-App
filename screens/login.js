import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

// Authentication
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notFoundError, setNotFoundError] = useState(false);

  const navigation = useNavigation();

  // Log the user in
  const handleHomePage = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user logged in: ', cred.user);
        navigation.push('Home Screen');
      })
      .catch(err => {
        // Invalid password/email
        setNotFoundError(true);
      });
  };

  // Remove the error message
  useEffect(() => {
    setNotFoundError(false);
  }, [email, password]);

  const handleCreateAccount = () => {
    navigation.push('Sign Up');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../assets/Gradient_KvZTDAL.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <StatusBar backgroundColor='#f8e11b' />
        <View gradientImage='Gradient_KvZTDAL.png' style={styles.background}>
          <View style={styles.elarosColumn}>
            <Text style={styles.elaros}>elaros</Text>
            <Text style={styles.longCovidTracker}>long-COVID tracker</Text>
            <View style={styles.form}>
              <View style={styles.emailColumn}>
                <View style={styles.email}>
                  <EvilIconsIcon
                    name='envelope'
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder='Email'
                    placeholderTextColor='rgba(45,45,45,1)'
                    secureTextEntry={false}
                    style={styles.emailInput}
                    onChangeText={newEmail => setEmail(newEmail)}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name='lock'
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor='rgba(45,45,45,1)'
                    secureTextEntry={true}
                    style={styles.passwordInput}
                    onChangeText={newPass => setPassword(newPass)}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity style={styles.button} onPress={handleHomePage}>
                <Text style={styles.text2}>Log in</Text>
              </TouchableOpacity>
              {notFoundError && (
                <Text style={styles.error}>Invalid Username or Password</Text>
              )}
            </View>
          </View>
          <View style={styles.elarosColumnFiller}></View>
          <View style={styles.footerTexts}>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={styles.button2}
            >
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  elaros: {
    textAlign: 'center',
    color: '#121212',
    fontSize: 74,
  },
  longCovidTracker: {
    color: '#121212',
    textAlign: 'center',
  },
  form: {
    height: 230,
    marginTop: 68,
  },
  email: {
    height: 59,
    backgroundColor: 'rgba(251,247,247,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon22: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    marginLeft: 20,
    alignSelf: 'center',
  },
  emailInput: {
    height: 30,
    color: 'rgba(0,0,0,1)',
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  password: {
    height: 59,
    backgroundColor: 'rgba(253,251,251,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 27,
  },
  icon2: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    marginLeft: 20,
    alignSelf: 'center',
  },
  passwordInput: {
    height: 30,
    color: 'rgba(0,0,0,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1,
  },
  button: {
    height: 59,
    backgroundColor: 'rgba(3,3,3,1)',
    borderRadius: 5,
    opacity: 0.94,
    justifyContent: 'center',
    marginTop: 20,
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  elarosColumn: {
    marginTop: 131,
    marginLeft: 41,
    marginRight: 41,
  },
  elarosColumnFiller: {
    flex: 1,
  },
  footerTexts: {
    height: 14,
    flexDirection: 'row',
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36,
  },
  button2: {
    width: '100%',
    height: 90,
  },
  createAccount: {
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
  },
  button2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  // ERROR
  error: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export default Login;
