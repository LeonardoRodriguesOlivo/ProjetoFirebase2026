import {View, Text, TextInput} from 'react-native';
import { database } from '../firebaseConfig';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';


export default function AddProduct() {
    const [nome, setNome]=useState('');
    const [valor, setValor]=useState('');
    const [imagem, setImagem]=useState('');

    const CadastrarProdutos=async()=>{
        try{
            await addDoc(collection(database, 'produtos'), {
            valor: parseFloat(valor),
            imagem
            }
        )
            alert('Produto cadastrado com sucesso!')
        }
        catch (error){
            console.log('Erro ao cadastrar', error)
        }
    }

    return(
        <View>
            <Text>ADICIONAR PRODUTOS</Text>
            <TextInput placeholder='Nome' value={nome} onChangeText={setNome}/>
            <TextInput placeholder='Valor' value={valor} onChangeText={setValor}/>
            <TextInput placeholder='Imagem(URL)' value={imagem} onChangeText={setImagem}/>
            <Button title="Adicionar"/>
        </View>
    )
}

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         padding: 20
//     },
//     texto:{
//         fontSize:30,
//         color: '#f000',
//         fontWeight: 'bold',
//         textAlign: 'center'
//     }
// })