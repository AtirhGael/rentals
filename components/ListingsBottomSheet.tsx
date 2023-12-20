//import liraries
import BottomSheet from '@gorhom/bottom-sheet';
import React, { Component,useRef,useMemo,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Listing from './Listings';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// create a component

interface Props{
    Listings: any[],
    category:string
}
const ListingsBottomSheet = ({Listings,category}:Props) => {
    const bottomSheetRef = useRef<BottomSheet>(null)
    snapPoints = useMemo(() => ['10%','100%'], [])
    const [refresh, setRefresh] = useState<number>(0);

    const onShowMap = () => {
      bottomSheetRef.current?.collapse();
      setRefresh(refresh + 1);
    };
    return (
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}
        handleIndicatorStyle={{
            backgroundColor:Colors.grey
        }}
        >
            <View style ={{flex:1}}>
                <Listing listing={Listings} category={category} refresh={refresh}/>
                <View style={styles.absoluteView}>
                    <TouchableOpacity onPress={onShowMap} style={styles.btn}>
                        <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
                        <Ionicons name="map" size={20} style={{ marginLeft: 10 }} color={'#fff'} />
                    </TouchableOpacity>
                    </View>
            </View>
        </BottomSheet>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    absoluteView: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
      },
      btn: {
        backgroundColor: Colors.dark,
        padding: 14,
        height: 50,
        borderRadius: 30,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        alignItems: 'center',
      },
      sheetContainer: {
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      },
});

//make this component available to the app
export default ListingsBottomSheet;
