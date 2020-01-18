import React, { useEffect } from 'react';
import {View, TextInput, Button} from 'react-native';

const Input = ({ message, 
                setMessage, 
                sendMessage}) => {
    
    useEffect(() => {
        console.log('IN THE INPUT COMPONENT USEEFFECT '+ message);
    });

    return (
        <View>
            <View>
                <TextInput 
                    type="text"
                    value={message}
                    placeholder='your message here'
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}/>
            </View>
            <View>
                <Button title="debug" onClick={console.log(message)}/>
            </View>
            <View>
                <Button title='send' onClick={(event) => sendMessage(event), console.log(message)}/>
            </View>
        </View>
    );
}

export default Input;