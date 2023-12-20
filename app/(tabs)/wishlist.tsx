//import liraries
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { defaultStyles } from '../../constants/Styles';
// create a component

const HeaderTitle =()=>{
    return(<>
        <Text  style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18}}>Add Your Property</Text>
    </>
    )

}
const WishList = () => {
    const router = useRouter()
    const [active, setactive] = useState(0)

    const [inputText, setInputText] = useState('');

    const handleTextChange = (text : any) => {
      // You can add additional logic here if needed
      setInputText(text);
    };
    return (
       <SafeAreaView style={styles.container}>
        <Stack.Screen

        options={{
            headerTitle:()=><HeaderTitle/>,
            headerLeft: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    backgroundColor: '#fff',
                    borderColor: Colors.grey,
                    borderRadius: 20,
                    borderWidth: 1,
                    padding: 4,
                    marginLeft:15
                  }}>
                  <Ionicons name="close-outline" size={22} />
                </TouchableOpacity>
            )
        }}
        />

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
         <Text style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18,paddingBottom:15}}>Category</Text>
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
            <TouchableOpacity
            onPress={()=>setactive(0)}
            style={{
                height:35,
                width:110,
                borderRadius:10,
                backgroundColor:active===0?Colors.dark:'#fff',
                justifyContent:'center',
                alignItems:'center',
                elevation:1
            }}
            >
                <Text style={{
                    fontFamily: 'mon',
                    fontSize:13,
                    color:active ===0?'#FFF':Colors.grey
                }}>Modern Studio</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setactive(1)}
            style={{
                height:35,
                width:120,
                borderRadius:10,
                backgroundColor:active===1?Colors.dark:'#fff',
                justifyContent:'center',
                alignItems:'center',
                elevation:1
            }}
            >
                <Text style={{
                    fontFamily: 'mon',
                    fontSize:13,
                    color:active ===1?'#FFF':Colors.grey
                }}>Modern Room</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setactive(2)}
            style={{
                height:35,
                width:120,
                borderRadius:10,
                backgroundColor:active===2?Colors.dark:'#fff',
                justifyContent:'center',
                alignItems:'center',
                elevation:1
            }}
            >
                <Text style={{
                    fontFamily: 'mon',
                    fontSize:13,
                    color:active ===2?'#FFF':Colors.grey
                }}>Apartment</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',gap:10,paddingTop:15}}>
            <TouchableOpacity
            onPress={()=>setactive(3)}
            style={{
                height:35,
                width:120,
                borderRadius:10,
                backgroundColor:active===3?Colors.dark:'#fff',
                justifyContent:'center',
                alignItems:'center',
                elevation:1
            }}
            >
                <Text style={{
                    fontFamily: 'mon',
                    fontSize:13,
                    color:active ===3?'#FFF':Colors.grey
                }}>Simple Studio</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setactive(4)}
            style={{
                height:35,
                width:120,
                borderRadius:10,
                backgroundColor:active===4?Colors.dark:'#fff',
                justifyContent:'center',
                alignItems:'center',
                elevation:1
            }}
            >
                <Text style={{
                    fontFamily: 'mon',
                    fontSize:13,
                    color:active ===4?'#FFF':Colors.grey
                }}>Simple Room</Text>
            </TouchableOpacity>
        </View>

        <Text style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18,paddingBottom:15,paddingTop:15}}>Add Location</Text>

        <TextInput
        placeholder='Location'
        placeholderTextColor={Colors.grey}
        style={styles.input}
        />
    <Text style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18,paddingBottom:15,paddingTop:15}}>Add Description</Text>
            <TextInput
        multiline
        numberOfLines={4} // Set the number of lines you want to display
        maxLength={1000}
        onChangeText={handleTextChange}
        value={inputText}
        placeholder="Type your text here"
        textAlignVertical="top" 
        placeholderTextColor={Colors.grey}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          marginTop: 10,
        }}
      />    

      <Text style={{fontFamily:'mon-sb',justifyContent:'center',fontSize:18,paddingTop:15}}>Add Photo</Text>     
      <Text style={{fontFamily:'mon',justifyContent:'center',fontSize:15,paddingTop:11}}>for a better experience you are adviced to add at least 4 pictures and a video</Text>     

        <View style={{flexDirection:'row',gap:15,alignItems:'center',paddingBottom:20}}>
            <TouchableOpacity  style={styles.buttonContainer}>
                <View style={styles.iconContainer}>
                <AntDesign name="camerao" size={24} color={'#FFF'} />
                </View>
                <Text style={styles.buttonText}>Add Photo</Text>
                </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonContainer}>
                <View style={styles.iconContainer}>
                <AntDesign name="videocamera" size={24} color="#FFF" />
                </View>
                <Text style={styles.buttonText}>Add Video</Text>
                </TouchableOpacity>
        </View>

        <TouchableOpacity style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Submit</Text>
        </TouchableOpacity>
        </ScrollView>
      
       </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:10
    },
    input:{
        padding:10,
        borderColor:Colors.grey,
        borderWidth:1,
        borderRadius:5
    },
    buttonContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.dark,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 3, // Add some elevation for a subtle shadow
        marginTop:25,
        width:'35%',
      },
      iconContainer: {
        marginRight: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

//make this component available to the app
export default WishList;
