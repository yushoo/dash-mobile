import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import io from "socket.io-client";

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

    // Socket connection
    useEffect(() => {
        
    });
    

    // useEffect(() => {
    //     const { name, room } = queryString.parse(location.search);
    //     socket = io(ENDPOINT);
    //     setRoom(room);
    //     setName(name)
    
    //     socket.emit('join', { name, room }, (error) => {
    //       if(error) {
    //         alert(error);
    //       }
    //     });
    //   }, [ENDPOINT, location.search]);
    
    //   //to handle messages.
    //   useEffect(() => {
    //         socket.on('message', (message) => {
    //         //adding message to all messages
    //         setMessages([...messages, message ]);
    //         })
    
    //         socket.on('roomData', ({ users }) => {
    //         setUsers(users);
    //         })
    
    //         //disconnect event. Server will be listening for disconnect event
    //         return () => {
    //         socket.emit('disconnect');
    //         socket.off();
    //         }
    //     // only run this useEffect when the messages array is changed
    //   }, [messages])
    

    // handlers
    backToJoinHandler = () => {
        navigation.navigate('Join', {joinVisible: true});
    }


    

    return(
        <View>
             {/* itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))} */}
            <Text>{JSON.stringify(navigation.getParam('name','no name'))}</Text>
            <Text>{JSON.stringify(navigation.getParam('name','no name'))}</Text>
            <Button title="back"
                onPress={backToJoinHandler}/>
        </View>
    );
}

export default Chat;

