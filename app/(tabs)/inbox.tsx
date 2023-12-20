//import liraries
import { Link, Stack, useRouter } from 'expo-router';
import React, { useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { defaultStyles } from '../../constants/Styles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

// create a component


const HeaderTitle =()=>{
    return(<>
        <Text  style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:25}}>Inbox</Text>
    </>
    )

}

const Inbox = () => {
    const [Massages, setMassages] = useState(false)
    return (
        <View style={defaultStyles.container}>
             <Stack.Screen
                        options={{
                        headerTitle:()=><HeaderTitle/>
                    }}
                    />
          {!Massages?(
            <View style={styles.container}>
                    <MaterialCommunityIcons name="message-alert-outline" size={ 54} color="black" />
                    <Text style={{fontWeight:'700',fontFamily:'mon-sb',fontSize:19}}>No New Messages</Text>
                    <Text style={{fontWeight:'400',fontFamily:'mon',fontSize:16,color:Colors.grey,textAlign:'center',lineHeight:20}}>
                        When you contact a Host or send a reservation request, you'l see your Messages here,.
                    </Text>
            </View>
          ):(
            <>
                <Text>OK Massages</Text>
            </>
          )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Inbox;
