import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const peoplelistitems = props=>{
    const { people } = props;
    const { first, last } = people.name;

    return(
     
        <View style={styles.line}>
                <Text style={styles.lineText}>
                { first }
                </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    line:{
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft:15,

    }
});
export default peoplelistitems;