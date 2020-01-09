import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Dash</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputArea} placeholder="Name"/>
        <TextInput style={styles.inputArea} placeholder="Chat Room"/>
        <Button title="Go"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#ffb65c',
    flex:1
  },
  topContainer: {
   padding: '35%',
  },
  titleText: {
    textAlign: 'center'
  },
  inputContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffb65c'
  },
  inputArea: {
    paddingBottom: 10
  },
});
