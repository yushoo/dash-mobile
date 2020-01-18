import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import io from "socket.io-client";

//Components
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

let socket;

const Chat = ({navigation}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    //String of current message
    const [message, setMessage] = useState('');
    //Array of all messages of a chat instance
    const [messages, setMessages] = useState([]);
    //Socket Server connection
    const ENDPOINT = 'https://dash-react-chat-app.herokuapp.com/'; 

    // Socket 
    // Connection

    // useEffect(() => {
    //     socket = io(ENDPOINT);
    // });

    useEffect(() => {
        let tempName = navigation.getParam('name','no name');
        let tempRoom = navigation.getParam('room','no name');
        socket = io(ENDPOINT);

        // setName(navigation.getParam('name','no name'));
        // setRoom(navigation.getParam('room','no name'));
        //socket.emit('join', { name:iname, room:iroom});
        //socket.emit('join', { name:'ASSSSSSSSSSSSS', room:'pizza'});
        
        console.log(tempName+ ' '+ navigation.getParam('room','no name'));
        // console.log('check check check'+ name + ' ' + room);
        socket.emit('join', { name: tempName, room: tempRoom }, (error) => {
            //Callback if any error to connect to socket server
            if(error){
                console.log('CONNECTION ERROR');
                alert(error);
            }
        });
        console.log('client socket has emitted join');
    }, [ENDPOINT,navigation.getParam('name','no name'), navigation.getParam('room','no name') ]);

    // Message Handler
    useEffect(() => {
        socket.on('message', (message) => {
          //adding message to all messages
          console.log(message);
          setMessages([...messages, message ]);
        });
    
        socket.on('roomData', ({ users }) => {
            console.log(message);
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

    const disconnectHandler = () => {
        socket.emit('disconnect');
        socket.off();
    }
    
    const debugHandler = () => {
        let tempName = navigation.getParam('name','no name');
        let tempRoom = navigation.getParam('room','no name')
        socket = io(ENDPOINT);

        setName(tempName);
        setRoom(tempRoom);
        //socket.emit('join', { name:iname, room:iroom});
        //socket.emit('join', { name:'ASSSSSSSSSSSSS', room:'pizza'});
        
        // console.log(name+ ' '+ room);
        socket.emit('join', { tempName, tempRoom }, (error) => {
            //Callback if any error to connect to socket server
            if(error){
                console.log('CONNECTION ERROR');
                alert(error);
            }
        });
        console.log('client socket has emitted join');
    }

    return(
        <View>
             {/* itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))} */}
             {/* <Text>Test Test Test</Text> */}
            <Text>Hello {navigation.getParam('name','no name')}</Text>
            <Text>Welcome to {navigation.getParam('room','no name')}</Text>
            
            <View>
                <Messages 
                    messages={messages} 
                    name={name}/>
            </View>

            <View>
                <Input 
                    message={message} 
                    setMessage={setMessage} 
                    sendMessage={sendMessage}/>
            </View>

            {/* <View>
                <Button onPress={console.log(message)}/> 
            </View> */}

            {/* <Button title="debug tester"
                onPress={debugHandler}/> */}
            {/* <Button title="back"
                onPress={backToJoinHandler}/> */}
            {/* <Button title="Disconnect" 
                onPress={disconnectHandler} /> */}
        </View>
    );
}

export default Chat;

