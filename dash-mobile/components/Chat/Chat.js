import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';


const Chat = ({navigation}) => {

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