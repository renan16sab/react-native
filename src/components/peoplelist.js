import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

import { firststring } from '../util';

const Peoplelist = props => {
    const { peoples } = props;
    const textElements = peoples.map(people => {
        const { title, first, last } = people.name;
    return (
        <View key={ first } style={styles.line}>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
    <Text style={styles.lineText}>
    {/* {title + ' ' + first + ' ' + last } */}
    {`${firststring(title)} ${firststring(first)} ${firststring(last)} `}

    </Text>
    </View>
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

    },
    avatar:{
        aspectRatio: 1,
        width:50
    }
});

export default Peoplelist;