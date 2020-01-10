import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Components
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const MainNavigator = createStackNavigator({
    Join: {
      screen: Join,
    }
  },
    {
      // Specifing Initial Screen
      initalRoute: 'Join'
    }
);

const App = createAppContainer(MainNavigator);

export default App;

