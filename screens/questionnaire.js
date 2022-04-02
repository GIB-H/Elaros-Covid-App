// questionnaire.js is the page users use to take the health questionnaires.

import { StyleSheet, View, Text, Image } from 'react-native';

function Questionnaire(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questionnaire</Text>
      <Image
        source={require('../assets/questions.png')}
        resizeMode='contain'
        style={styles.image}
      />
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
    fontSize: 25,
    marginTop: 10,
  },
  image: {
    position: 'absolute',
    width: 300,
    marginBottom: 70,
  },
});

export default Questionnaire;
