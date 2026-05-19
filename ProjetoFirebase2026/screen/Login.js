import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import {firebaseConfig} from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}){

    const [email, setemail]=useState('');
    const [senha, setsenha]=useState('');

    const auth = getAuth();

    const CriarConta=()=>{
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed up 
            console.log('conta criada!');
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(error.message)
            // ..
        });
    }

    const EntrarConta=()=>{
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigation.navigate('Home');
            // ...
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(error.message)
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>LOGIN</Text>
            <TextInput placeholder='Email' placeholderTextColor={'#641111ff'} value={email} onChangeText={setEmail} style={styles.txtInput}></TextInput>
            <TextInput placeholder='Senha' placeholderTextColor={'#641111ff'} value={senha} onChangeText={setSenha} style={styles.txtInput}></TextInput>
            <Button 
            title='Entrar
            ' color={'#a11c1cff'}
            />
            <Button title='Criar conta' colar={'#f000'}/>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#90c472ff'
    },

    texto:{
        fontSize: 30,
        color: '#641111ff',
        fontWeight: 'bold',
    },

    txtInput:{
        borderColor: '#000000ff',
        borderWidth: 2,
        padding: 5,
        color: '#000000ff'
    },
})