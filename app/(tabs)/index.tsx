//import liraries
import { Stack } from 'expo-router';
import React, { Component, useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExploreHeader from '../../components/ExploreHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Listing from '../../components/Listings';
import listingData from '../../assets/data/airbnb-listings.json'
import listingDataGeo from '../../assets/data/airbnb-listings.geo.json'
import ListingMap from '../../components/ListingsMap';
import ListingsBottomSheet from '../../components/ListingsBottomSheet';

// create a component
const Index = () => {

    const [category,setCartegory] = useState('san city')
    const items = useMemo(()=>listingData as any, [])
    const geo = useMemo(()=>listingDataGeo as any, [])
    const onChanageData=(category: string) =>{
    //    console.log('city = ',category);
       setCartegory(category)
       
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
            options={{
                header:()=><ExploreHeader onCategoryChanged={onChanageData}/>
            }}
            />
            {/* <Listing listing={items} category={category}/> */}
            <ListingMap listings={geo} />
            <ListingsBottomSheet Listings={items} category={category}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-50
    },
});

//make this component available to the app
export default Index;
