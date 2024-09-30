import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const card_cidade = (nome, uf)=>{
    return(
        <View style={styles.card}>
            <Text style={Styles.cidade}>{nome}</Text>
             - 
             <Text style={styles.uf}>{uf}</Text> 
                    
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#444'
    },
    cidade:{
        fontSize:18,
        color:'#ff0',
        fontWeight:'600'
    },
    uf:{
        fontSize:18,
        color:'#5435',
        fontWeight:'600'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  