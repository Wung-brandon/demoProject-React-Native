//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

// create a component
const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop:100,
        padding:16,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,  
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        color: '#ddb52f',
        
    }
});

//make this component available to the app
export default StartGameScreen;
