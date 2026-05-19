import {View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import { useState, useEffectEvent } from 'react';
import { database } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


export default function Home({navigation}) {

  const [produtos, setProdutos]=useState([]);

  useEffect(()=>{
    async function carregarProdutos(){
      try{
        const querySnapshot=await getDocs(collection(database, 'produtos'));
        const lista=[];
        querySnapshot.forEach((doc)=>{
          lista.push({id: doc.id, doc.data()})
        })
        setProdutos(lista);
      }catch(error){
        console.log('erro ao buscar no bando', error)
      }
    }
    carregarProdutos();
  }, [])

  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>HOME</Text>
      <Button title='Add Produto' onPress={()=>(navigation.navigate("AddProduct"))}/>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
  
  justifyContent: 'center',
  alignItems: 'center'
  },
  txt:{
    fontSize: 20,
    textAlign: 'justify'
  },
  img:{
    width: 300,
    height: 300
  },
  cards:{
    alignItems: 'center',
  
  
  }

  
})