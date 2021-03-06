import { useEffect, useState } from 'react';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);

  const navigation = useNavigation();

  // Hide errors once user re-types
  useEffect(() => {
    setPasswordError(false);
    setEmailExistsError(false);
    setEmailInvalidError(false);
  }, [email, password]);

  // Create User
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        console.log('user created: ', cred.user);
      })
      .catch(err => {
        console.log(err);
        if (err.code === 'auth/email-already-in-use') {
          setEmailExistsError(true);
        } else if (err.code === 'auth/invalid-email') {
          setEmailInvalidError(true);
        } else if (err.code === 'auth/weak-password') {
          setPasswordError(true);
        }
      });
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../assets/Gradient_KvZTDAL.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <StatusBar backgroundColor='#f8e11b' />
        <View style={styles.background}>
          <View style={styles.elaros1Column}>
            <Text style={styles.elaros1}>elaros</Text>
            <Text style={styles.longCovidTracker1}>long-COVID tracker</Text>
            <View style={styles.form}>
              <View style={styles.nameColumn}>
                <View style={styles.email}>
                  <EvilIconsIcon
                    name='envelope'
                    style={styles.icon6}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder='Email'
                    placeholderTextColor='rgba(0,0,0,1)'
                    secureTextEntry={false}
                    style={styles.emailInput}
                    onChangeText={newEmail => setEmail(newEmail)}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.nameColumnFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name='lock' style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder='Password'
                  placeholderTextColor='rgba(0,0,0,1)'
                  secureTextEntry={true}
                  style={styles.passwordInput}
                  onChangeText={newPass => setPassword(newPass)}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.elaros1ColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={styles.button}
            >
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
            {passwordError && (
              <Text style={styles.error}>Password is too weak</Text>
            )}
            {emailExistsError && (
              <Text style={styles.error}>This email already exists</Text>
            )}
            {emailInvalidError && (
              <Text style={styles.error}>This email is invalid</Text>
            )}
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  background: {
    justifyContent: 'center',
    flex: 1,
  },
  rect2: {
    width: 360,
    height: 740,
    alignSelf: 'center',
  },
  rect2_imageStyle: {},
  elaros1: {
    color: '#121212',
    fontSize: 74,
    marginLeft: 48,
  },
  longCovidTracker1: {
    color: '#121212',
    marginLeft: 85,
  },
  form: {
    height: 230,
    marginTop: 69,
  },
  icon5: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: 'center',
  },
  email: {
    height: 59,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 27,
  },
  icon6: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    marginLeft: 15,
    alignSelf: 'center',
  },
  emailInput: {
    height: 30,
    color: 'rgba(0,0,0,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  nameColumn: {},
  nameColumnFiller: {
    marginBottom: 50,
  },
  password: {
    height: 59,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon7: {
    color: 'rgba(0,0,0,1)',
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13,
  },
  passwordInput: {
    height: 30,
    color: 'rgba(0,0,0,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  elaros1Column: {
    marginTop: 131,
    marginLeft: 41,
    marginRight: 41,
  },
  elaros1ColumnFiller: {
    flex: 1,
  },
  button: {
    height: 55,
    backgroundColor: 'rgba(0,0,0,1)',
    opacity: 0.94,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 40,
  },
  text2: {
    width: 66,
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  text4: {
    color: 'rgba(0,0,0,1)',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default SignUp;
