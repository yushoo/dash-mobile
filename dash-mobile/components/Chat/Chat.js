import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import io from "socket.io-client";

let socket;

const Chat = ({navigation}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    //String og current message
    const [message, setMessage] = useState('');
    //Array of all messages of a chat instance
    const [messages, setMessages] = useState([]);
    //Socket Server connection
    const ENDPOINT = 'https://dash-react-chat-app.herokuapp.com/'; 

    // Socket 
    // Connection
    useEffect(() => {
        socket = io(ENDPOINT);

        setName(navigation.getParam('name','no name'));
        setRoom(navigation.getParam('name','no name'));
        socket.emit('join', { name:'boi', room:'pizza'});

        console.log(name+ ' '+ room);
        socket.emit('join', { name, room }, (error) => {
            //Callback if any error to connect to socket server
            if(error){
                console.log('CONNECTION ERROR');
                alert(error);
            }
        });
    }, [ENDPOINT, ]);

    // Message Handler
    useEffect(() => {
        socket.on('message', (message) => {
          //adding message to all messages
          setMessages([...messages, message ]);
        });
    
        socket.on('roomData', ({ users }) => {
          setUsers(users);
        })
    
        //disconnect event. Server will be listening for disconnect event
        return () => {
          socket.emit('disconnect');
          socket.off();
        }
        // only run this useEffect when the messages array is changed
      }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

    // handlers
    const backToJoinHandler = () => {
        navigation.navigate('Join', {joinVisible: true});
    }

    return(
        <View>
             {/* itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))} */}
             <Text>Test Test Test</Text>
            <Text>Hello {navigation.getParam('name','no name')}</Text>
            <Text>Welcome to {navigation.getParam('room','no name')}</Text>
            <Button title="debug tester"
                onPress={() => {
                    setName('asdf');
                }}/>
            <Button title="back"
                onPress={backToJoinHandler}/>
        </View>
    );
}

export default Chat;

