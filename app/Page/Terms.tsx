//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { defaultStyles } from '../../constants/Styles';
import { Stack, useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// create a component
const Terms = () => {

    const router = useRouter()
    return (
        <View style={defaultStyles.container}>

            <Stack.Screen
                options={{
                    headerTitle : ()=> <Text  style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18}}>Terms & Conditions</Text>,
                }}
            />
            <Text>Terms</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Terms;
