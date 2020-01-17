import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import Message from './Message/Message';

// should be passed in messages and name
const Messages = ({ messages, name }) => {
    
    return(
        <View>
            <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{        
                    this.scrollView.scrollToEnd({animated: true});
                }}>
                     {messages.map((message, i) => <View key={i}><Message message={message} name={name}/></View>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Messages;