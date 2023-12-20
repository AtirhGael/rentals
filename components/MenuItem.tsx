//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

// create a component
interface Props{
    icon:string,
    title:string,
    onpress:any[]
}
const MenuItems = ({icon,title,onpress}:Props) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onpress}>
                <View style={styles.containerIner}>
                <Ionicons name={icon} size={30} color="black" />
                <Text style={{fontFamily:'mon'}}>{title}</Text>
                </View>
                <Ionicons name="ios-arrow-redo-circle" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.line} />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerIner: {
        flexDirection:'row',
        gap:15,
        alignItems:'center'
    },
    line: {
        borderBottomColor: Colors.grey, 
        borderBottomWidth: .5,       
        marginVertical: 10, 
      },
});

//make this component available to the app
export default MenuItems;
