// log-info.js  page is in the components folder as this is being reusued in the diary screen

import { useState } from 'react';
import { Text, StyleSheet, View, Modal, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from 'react-native-vector-icons';

// Database
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const LogInfo = ({ item, handleDelete }) => {
  const color = item.color;
  const logo = item.logo;
  const [modalVisible, setModalVisible] = useState(false);
  console.log('item', item);

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this log?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  handleDelete(item.id);
                }}
              >
                <Text style={styles.textStyle}>Delete Log</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose2]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close Modal</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons
            name={'schedule'}
            color={'black'}
            size={20}
          ></MaterialIcons>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.delete}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <MaterialIcons
                name={'delete'}
                color={'white'}
                size={20}
              ></MaterialIcons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentHeader}>
            <MaterialIcons name={logo} color={color} size={60}></MaterialIcons>
            <Text
              style={{
                color: color,
                fontSize: 25,
                marginLeft: 15,
                marginTop: 10,
              }}
            >
              {item.rating}
            </Text>
          </View>
          <View style={styles.symptomContent}>
            {item.symptoms.map(symptom => (
              <View style={styles.symptomContainer}>
                <MaterialIcons name={'circle'} color={color} size={10} />
                <Text style={{ marginLeft: 5 }}>{symptom}</Text>
              </View>
            ))}
          </View>
          <View>
            <View>
              {item.data.map(label => (
                <Text style={{ marginLeft: 5, color: '#7f8280' }}>{label}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#eee',
  },
  cardHeader: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#f5c236',
  },
  cardContent: {
    padding: 5,
    backgroundColor: '#fff',
  },
  cardContentHeader: {
    flexDirection: 'row',
  },
  date: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  symptomContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  symptomContainer: {
    marginTop: 5,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    position: 'absolute',
    right: 10,
    top: 5,
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonClose2: {
    backgroundColor: 'green',
    marginLeft: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LogInfo;
