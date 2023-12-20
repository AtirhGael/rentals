//import liraries
import React, { Component, useEffect, useRef,useState } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem,Image, ScrollView } from 'react-native';
import { defaultStyles } from '../constants/Styles';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeOutLeft }  from 'react-native-reanimated';
import { BottomSheetFlatList, BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
// create a component

interface props {
    listing:any[],
    category:string,
    refresh:number
}
const Listing = ({listing,category,refresh}:props) => {
const listRef = useRef<BottomSheetFlatListMethods>(null)
const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        setisLoading(true)
        console.log('category has changed',category);
        setTimeout(()=>{
            setisLoading(false)
        },200)
    },[category])

    useEffect(()=>{
        if(refresh){
            listRef.current?.scrollToOffset({offset:0,animated:true})
        }
        console.log('refresshed');
        
    },[refresh])

    console.log(listing.length);

    const renderItem : ListRenderItem  <any> =({item})=>(
        <Link href={`/listing/${item.id}`} asChild>
            <TouchableOpacity>
                <Animated.View style={{padding:12,gap:10,marginVertical:16}} entering={FadeInRight} exiting={FadeOutLeft}>
                    <Image source={{uri:item.medium_url}} style={styles.containerImage}/>
                    <TouchableOpacity style={{top:30,right:30,position:'absolute'}} >
                        <Ionicons name="heart-outline" size={20} color="black" />
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',gap:5,justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'mon-sb',fontSize:15}}>{item.name}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Ionicons name='star' size={12} color={'#000'}/>
                            <Text style={{fontFamily:'mon-sb'}}>{item.review_scores_rating/20}</Text>
                        </View>
                    </View>

                    <Text style={{fontFamily:'mon'}}>{item.room_type}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                        <Text style={{fontFamily:'mon-sb'}}>$ {item.price}</Text>
                        <Text style={{fontFamily:'mon'}}>Night</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Link>
    )
    
    return (
        <View style={styles.container}>
            <BottomSheetFlatList
            showsVerticalScrollIndicator={false}
            ref={listRef}
            data={ isLoading? []: listing}
            renderItem={renderItem}
            ListHeaderComponent={(<Text style={styles.info}>{listing.length} Homes</Text>)}
            />
        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    containerImage:{
        height:300,
        borderRadius:10,
        position:'relative'
    },
    info: {
        textAlign: 'center',
        fontFamily: 'mon-sb',
        fontSize: 16,
        marginTop: 4,
      },
});

//make this component available to the app
export default Listing;
