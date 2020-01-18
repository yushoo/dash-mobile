import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
            <View style={styles.messageContainer, styles.justifyEnd}>
                <Text style={styles.sentText}>{trimmedName}</Text>
                <View style={styles.messageBox, styles.backgroundBlue}>
                    <Text style={styles.messageText}>{ReactEmoji.emojify(text)}</Text>
                </View>
            </View>
        ) 
        : (
            <View style={styles.messageContainer, styles.justifyStart}>
                <View style={styles.messageBox, styles.backgroundLight}>
                     <Text>{ReactEmoji.emojify(text)}</Text>
                </View>
                <Text style={styles.sentText}>{user}</Text>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    messageBox: {
        backgroundColor: '#F3F3F3',
        borderRadius: 20,

    },
    messageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingHorizontal: '5%',
        paddingVertical:0,
        marginTop: 3,
    },
    justifyEnd: {
        justifyContent:'flex-end'
        
    },
    justifyStart: {
        justifyContent:'flex-start'
    },
    sentText: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto',
        color: '#828282',
        letterSpacing:0.3,
    },
    messageBox: {
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        paddingRight: 5,
        paddingLeft:5,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#ffffff',
        maxWidth: '80%',

        // border-radius: 20px;
        // padding: 5px 20px;
        // color: white;
        // display: inline-block;
        // max-width: 80%;
    },
    messageText: {
        justifyContent: 'center'
    },
    backgroundBlue: {
        backgroundColor: '#2979FF'
    },
    backgroundLight: {
        backgroundColor: '#F3F3F3'
    },
    colorWhite: {
        color: 'white'
    },
    colorDark: {
        color: '#353535'
    },
    
});

export default Message;