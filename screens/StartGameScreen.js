//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

// create a component
const StartGameScreen = () => {
    const [enterNumber, setEnterNumber] = useState("")
    console.log(enterNumber)
    function inputNumberHandle(enteredText) {
        setEnterNumber(enteredText)
        console.log(enteredText)
        // Add your logic here for button press action.
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enterNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Input', 'Please enter a valid number between 1 and 99.')
            return
    }
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enterNumber}
                onChangeText={inputNumberHandle}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                
                
            </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100,
        padding:16,
        backgroundColor: '#3b021f',
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
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginVertical: 16,
    },
    buttonContainer : {
        flex: 1
    }
});

//make this component available to the app
export default StartGameScreen
