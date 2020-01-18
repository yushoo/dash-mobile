import React, { useEffect } from 'react';
import {View, TextInput, Button} from 'react-native';

const Input = ({ message, 
                setMessage, 
                sendMessage}) => {
    
    useEffect(() => {
        console.log('IN THE INPUT COMPONENT USEEFFECT '+ message);
    });

    const handleTextChange = (e,text) => {
        e.persist();
        setMessage(text);
    }

    return (
        <View>
            <View>
                <TextInput 
                    type="text"
                    value={message}
                    placeholder='your message here'
                    onChangeText={text => {setMessage(text);console.log(message)}}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}/>
            </View>
            <View>
                <Button title="debug" onPress={() => {console.log(message);console.log('asdfasdfasdf')}}/>
            </View>
            <View>
                <Button title='send' onClick={(event) => sendMessage(event), console.log(message)}/>
            </View>
        </View>
    );
}

export default Input;