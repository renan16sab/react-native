import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { firststring } from '../util';

const Peoplelist = props => {
    const { peoples, onPress } = props;
    const textElements = peoples.map(people => {
        const { title, first, last } = people.name;
    return (
        <TouchableOpacity onPress={() => {
        onPress({ people });     
    }}>
        <View key={ title, first, last } style={styles.line}         
        onPress={onPress}
>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
    <Text style={styles.lineText}>
    {/* {title + ' ' + first + ' ' + last } */}
    {`${firststring(title)} ${firststring(first)} ${firststring(last)} `}

    </Text>
    </View>
    </TouchableOpacity> 
);
    
      });
    
    return (
        <View style={styles.container}>
            { textElements }
        </View>
 )
};

const styles = StyleSheet.create ({
    container:{
    backgroundColor: '#e2f9ff'
    },
    line:{
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    lineText: {
        fontSize: 20,
        paddingLeft:15,
        flex: 5

    },
    avatar:{
        aspectRatio: 1,
        flex: 1, 
        marginLeft: 15,
        borderRadius: 50    
    },
});

export default Peoplelist;