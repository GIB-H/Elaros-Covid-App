import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../styles/card';

function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Welcome to your Elaros Covid App Homepage! </Text>
      <Text>
        Below are some explainations for the different areas of this App, and
        how you should use them
      </Text>
      <Card>
        <Text>
          Here you can take a questionaire which we can use to figure out what
          issues you are facing
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Question');
          }}
          style={{
            height: 20,
            width: 80,
            marginTop: 10,
            backgroundColor: 'orange',
          }}
        >
          <Text>Questionaire</Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <Text>Here is where you can access your current and future goals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Your Goals');
          }}
          style={{
            height: 20,
            width: 80,
            marginTop: 10,
            backgroundColor: 'orange',
          }}
        >
          <Text>Goals</Text>
        </TouchableOpacity>
      </Card>
      <Card>
        <Text>
          Here are daily logs that can let you view your health record
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Diary');
          }}
          style={{
            height: 20,
            width: 80,
            marginTop: 10,
            backgroundColor: 'orange',
          }}
        >
          <Text>Logs</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

export default Home;
