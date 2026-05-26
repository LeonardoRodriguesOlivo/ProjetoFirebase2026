import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

export default function CardProduct({nome, valor, imagem}){
    return(
            <Card>
                <Card.Cover source={{uri: imagem}}/>
                <Card.Content style={styles.cards}>
                    <Text style={styles.txt}>{nome}</Text>
                    <Text style={styles.txt}>R$ {valor}</Text>
                </Card.Content>
            </Card>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cards:{
        alignItems: 'center'
    }
})