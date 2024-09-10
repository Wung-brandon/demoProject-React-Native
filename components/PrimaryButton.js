//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable,Alert } from 'react-native';

// create a component
const PrimaryButton = ({children, onPress}) => {
    
    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable 
                    onPress={onPress}  
                    android_ripple={{color: "#640233"}}
                    style={({pressed}) => pressed ?
                    [styles.buttonInnerContainer, styles.pressed] :
                    styles.buttonInnerContainer}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#72063c',  
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },
    pressed: {
        opacity: 0.75,
    }
});

//make this component available to the app
export default PrimaryButton;
