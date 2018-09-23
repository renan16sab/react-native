import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
//StateFull = Estado para gerenciar app
// class Header extends React.Component {
//     render(){

//     }
// }
//Estilisando o titulo do app
// const titleStyle = {
//     fontSize: 25,
//     color:'#fff',

// };
//Estilisando o Texto do app
// const containerStyle = {
//     marginTop: 25,
//     backgroundColor: '#6ca2f7',
    
//     alignItems: 'center',
//     justifyContent: 'center',
//     // padding: 30,
// };

const Header = (props) => (

    <View style={style.container}>

 <Text style={style.title}> {props.title} </Text>

    </View>
    
);

//Jogando em UM Objeto Style
const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color:'#fff',
    }
});

export default Header;
