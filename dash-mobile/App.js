import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Dash</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputArea}>
           <TextInput placeholder="Name" placeholderTextColor="gray"/>
        </View>
        <View style={styles.inputArea}>
          <TextInput placeholder="Chat Room" placeholderTextColor="gray"/>
        </View>
        <View style={styles.joinButton} >
          <Button title="Join" />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#D1C4E9',
    flex:1
  },
  topContainer: {
   padding: '35%',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    // adjustsFontSizeToFit: true,
    fontSize: 40
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1C4E9'
  },
  inputArea: {
    borderRadius: 10 ,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: 5,
    margin: '2%'
  }, 
  joinButton: { 
    borderRadius: 100,
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10
  },
});
