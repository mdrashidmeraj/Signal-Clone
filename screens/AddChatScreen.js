import { useNavigation } from '@react-navigation/native'
import React,{useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase';


const AddChatScreen = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState("")

    useLayoutEffect(()=> {
        navigation.setOptions({
            title: "Add a new chat"
        })
    }, [navigation])

    const createChat = async() => {
        await db.collection('chats').add({
            chatName: input
        })
        .then(()=> {navigation.goBack()})
        .catch((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Input containerStyle={styles.inputContainer}
                placeholder="Enter a Chat" 
                value={input} 
                onChangeText={(text) => setInput(text)} 
                leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black"/>
                }
            />
            <Button disabled={!input} containerStyle={styles.button} title="Create New Chat" onPress={createChat}/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20,
    },
    inputContainer:{
        width:300
    },
    button:{
        width:200,
        marginTop:10
    },
})
