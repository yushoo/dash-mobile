import React from 'react';
import {View, Text} from 'react-native';
import ReactEmoji from 'react-emoji';

const Message = ({ message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser 
        ? (
            <View>
                <Text>{ReactEmoji.emojify(text)}</Text>
            </View>
        ) 
        : (
            <View>
                <Text>{ReactEmoji.emojify(text)}</Text>
            </View>
        )
    );
}

export default Message;