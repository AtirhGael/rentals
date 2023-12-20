//import liraries
import { useRouter } from 'expo-router';
import React, { Component,useRef,memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker, } from 'react-native-maps';
// create a component

interface props{
    listings: any[]
}
const ListingMap = memo(({listings}:props) => {

    // console.log(listings.features.length);
    const router = useRouter()
    const mapRef = useRef<any>(null);
    const region = {
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      const onMarkerSelected = (event: any) => {
        router.push(`/listing/${event.properties.id}`);
      };

      const renderCluster = (cluster: any) => {
        const { id, geometry, onPress, properties } = cluster;
    
        const points = properties.point_count;
        return (
          <Marker
            key={`cluster-${id}`}
            coordinate={{
              longitude: geometry.coordinates[0],
              latitude: geometry.coordinates[1],
            }}
            onPress={onPress}>
            <View style={styles.marker}>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'mon-sb',
                }}>
                {points}
              </Text>
            </View>
          </Marker>
        );
      };
    
    return (
        <View style={styles.container}>
            <MapView 
            ref={mapRef}
            animationEnabled={false}
            region={region}
            showsMyLocationButton
            showsUserLocation
            style={styles.map}
            clusterColor="#fff"
            clusterTextColor="#000"
            clusterFontFamily="mon-sb"
            renderCluster={renderCluster}
            >
                {listings.features.map((item:any)=>(
                    <Marker
                    coordinate={{
                      latitude: item.properties.latitude,
                      longitude: item.properties.longitude,
                    }}
                    key={item.properties.id}
                    onPress={() => onMarkerSelected(item)}>
                    <View style={styles.marker}>
                      <Text style={styles.markerText}>€ {item.properties.price}</Text>
                    </View>
                  </Marker>

                ))}
            </MapView>
        </View>
    );
});

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFF',
    },
    map:{
        height:'100%',
        width:'100%'
    },
    marker: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
          width: 1,
          height: 10,
        },
      },
      markerText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
      },
});

//make this component available to the app
export default ListingMap;
