import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';


// should be passed in messages and name
const Messages = () => {
    
    return(
        <View>
            <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{        
                    this.scrollView.scrollToEnd({animated: true});
                }}>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                     {/* {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)} */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Messages;