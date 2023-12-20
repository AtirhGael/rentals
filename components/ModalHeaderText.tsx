//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

// create a component
const ModalHeaderText = () => {
    const [active, setactive] = useState(0)
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>setactive(0)}
            >
                <Text style={{
                    fontFamily:'mon-sb',
                    fontSize:18,
                    color:active===0?'#000':Colors.grey,
                    textDecorationLine:active === 0?'underline':'none'
                }}>Stays </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setactive(2)}
            >
                <Text style={{
                    fontFamily:'mon-sb',
                    fontSize:18,
                    color:active===2?'#000':Colors.grey,
                    textDecorationLine:active === 2?'underline':'none'
                }}>Experiments </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent:'center',
        flexDirection:'row',
        gap:10
        // alignItems:'center'
    },
});

//make this component available to the app
export default ModalHeaderText;
