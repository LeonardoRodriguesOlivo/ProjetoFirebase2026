// import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
// import {useState} from 'react';
// import {firebaseConfig} from '../firebaseConfig';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



// export default function Login({navigation}){

//     const [email, setemail]=useState('');
//     const [senha, setsenha]=useState('');

//     const auth = getAuth();

//     const CriarConta=()=>{
//         createUserWithEmailAndPassword(auth, email, senha)
//         .then((userCredential) => {
//             // Signed up 
//             console.log('conta criada!');
//             const user = userCredential.user;
//             console.log(user);
//             // ...
//         })
//         .catch((error) => {
//             console.log(error)
//             Alert.alert(error.message)
//             // ..
//         });
//     }

//     const EntrarConta=()=>{
//         signInWithEmailAndPassword(auth, email, senha)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//             navigation.navigate('Home');
//             // ...
//         })
//         .catch((error) => {
//             console.log(error)
//             Alert.alert(error.message)
//         });
//     }

//     return (
//         <View style={styles.container}>

//             <Text style={styles.texto}>Login</Text>

//             <TextInput
//                 placeholder="Email"
//                 placeholderTextColor={'#5d2323ff'}
//                 value={email}
//                 onChangeText={setemail}
//                 style={styles.txtInput}
//             />

//             <TextInput
//                 placeholder="Senha"
//                 placeholderTextColor={'#5d2323ff'}
//                 value={senha}
//                 onChangeText={setsenha}
//                 style={styles.txtInput}
//                 secureTextEntry
//             />

//             <Button title="Entrar" color={'#5d2323ff'} onPress={EntrarConta}/>
//             <Button title="Criar conta" color ={'#5d2323ff'} onPress={CriarConta}   />
            
//         </View>
//     );
// }

// const styles=StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#90c472ff'
//     },

//     texto:{
//         fontSize: 30,
//         color: '#641111ff',
//         fontWeight: 'bold',
//     },

//     txtInput:{
//         borderColor: '#000000ff',
//         borderWidth: 2,
//         padding: 5,
//         color: '#000000ff'
//     },
// })

import { View, TextInput, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import {firebaseConfig} from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

export default function Login({navigation}) {

const [email, setemail] = useState('');
const [senha, setsenha] = useState('');

const auth = getAuth();

const CriarConta = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
    // Signed up 
    console.log('conta criada')
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
    Alert.alert(error.message)
    // ..
  });
}
const EntrarConta = () => {
    signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigation.navigate('Home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Login</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor={'#5d2323ff'}
                value={email}
                onChangeText={setemail}
                style={styles.txtInput}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor={'#5d2323ff'}
                value={senha}
                onChangeText={setsenha}
                style={styles.txtInput}
                secureTextEntry
            />

            <Button title="Entrar" color={'#5d2323ff'} onPress={EntrarConta}/>
            <Button title="Criar conta" color ={'#5d2323ff'} onPress={CriarConta}   />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // centraliza tudo
        backgroundColor: '#ffffffff',
    },

    texto: {
        fontSize: 30,
        color: 'rgba(0, 170, 255, 1)',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    txtInput: {
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10, // corrigindo
        width: '80%',
        marginBottom: 10,
        borderRadius: 8,
    },

    foto: {
        height: 150,
        width: 150,
        marginBottom: 20,
        borderRadius: 75, // imagem redonda
    },
});