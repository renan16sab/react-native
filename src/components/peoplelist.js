import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import peoplelistitems from './peoplelistitems';
const Peoplelist = props => {
    const { peoples } = props;

    const items = peoples.map(people => {
        return (
             <peoplelistitems
              key= {people.name.first} people = {people}    />
            );

    });
    
    return (
        <View style={styles.container}>
            { items }
        </View>
 )
};

const styles = StyleSheet.create ({
    container:{
    backgroundColor: '#e2f9ff'
    }
    
})

export default Peoplelist;