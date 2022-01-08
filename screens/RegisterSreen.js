import React, {useState} from 'react'
import { StyleSheet,  KeyboardAvoidingView, View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import {auth} from '../firebase'

const RegisterSreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            })
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text h3 style={{marginBottom:50}}>
                Create a signal account 
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text)=> setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text)=> setImageUrl(text)}
                />
            </View>
            <Button raised containerStyle={styles.button} title="Register" onPress={register}/>
        <View style={{ height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterSreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    }
})
