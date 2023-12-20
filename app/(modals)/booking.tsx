//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,ScrollView,Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { defaultStyles } from '../../constants/Styles';
import Animated,{ FadeIn, FadeOut, SlideInDown  } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {places} from '../../assets/data/places'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import Colors from '../../constants/Colors';

// create a component


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const guestsGropus = [
  {
    name: 'Adults',
    text: 'Ages 13 or above',
    count: 0,
  },
  {
    name: 'Children',
    text: 'Ages 2-12',
    count: 0,
  },
  {
    name: 'Infants',
    text: 'Under 2',
    count: 0,
  },
  {
    name: 'Pets',
    text: 'Pets allowed',
    count: 0,
  },
];
const Booking = () => {
    const [openCard, setOpenCard] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState(0);
  
    const [groups, setGroups] = useState(guestsGropus);
    const router = useRouter();
    const today = new Date().toISOString().substring(0, 10);
  
    const onClearAll = () => {
      setSelectedPlace(0);
      setOpenCard(0);
    };

    
    return (
        <BlurView intensity={70} style={styles.container} tint='light'>
      <View style={styles.card}>
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}>
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewdData}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 0 && <Text style={styles.cardHeader}>Where to?</Text>}
        {openCard == 0 && (
          <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.cardBody}>
            <View style={styles.searchSection}>
              <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
              <TextInput
                style={styles.inputField}
                placeholder="Search destinations"
                placeholderTextColor={Colors.grey}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.placesContainer}>
              {places.map((item, index) => (
                <TouchableOpacity onPress={() => setSelectedPlace(index)} key={index}>
                  <Image
                    source={item.img}
                    style={selectedPlace == index ? styles.placeSelected : styles.place}
                  />
                  <Text style={{ fontFamily: 'mon', paddingTop: 6 }}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>

      {/* When */}
      <View style={styles.card}>
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}>
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewdData}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 1 && <Text style={styles.cardHeader}>When's your trip?</Text>}

        {/* {openCard == 1 && (
          <Animated.View style={styles.cardBody}>
            <DatePicker
              options={{
                defaultFont: 'mon',
                headerFont: 'mon-sb',
                mainColor: Colors.primary,
                borderColor: 'transparent',
              }}
              current={today}
              selected={today}
              mode={'calendar'}
            />
          </Animated.View>
        )} */}
      </View>
        <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(400)}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: '100%', justifyContent: 'center' }}
            // onPress={onClearAll}
            >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'mon-sb',
                textDecorationLine: 'underline',
              }}>
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
            onPress={() => router.back()}>
            <Ionicons
              name="search-outline"
              size={24}
              style={defaultStyles.btnIcon}
              color={'#fff'}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
        </Animated.View>
      </BlurView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#2c3e50',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 14,
        margin: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2,
        },
        gap: 20,
      },
      cardHeader: {
        fontFamily: 'mon-b',
        fontSize: 24,
        padding: 20,
      },
      cardBody: {
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      cardPreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
    
      searchSection: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        marginBottom: 16,
      },
      searchIcon: {
        padding: 10,
      },
      inputField: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      },
      placesContainer: {
        flexDirection: 'row',
        gap: 25,
      },
      place: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      placeSelected: {
        borderColor: Colors.grey,
        borderWidth: 2,
        borderRadius: 10,
        width: 100,
        height: 100,
      },
      previewText: {
        fontFamily: 'mon-sb',
        fontSize: 14,
        color: Colors.grey,
      },
      previewdData: {
        fontFamily: 'mon-sb',
        fontSize: 14,
        color: Colors.dark,
      },
    
      guestItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
      },
      itemBorder: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.grey,
      },
});

//make this component available to the app
export default Booking;
