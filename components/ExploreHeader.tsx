//import liraries
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';

// create a component

const categories = [
    {
      name: 'Tiny homes',
      icon: 'home',
    },
    {
      name: 'Cabins',
      icon: 'house-siding',
    },
    {
      name: 'Trending',
      icon: 'local-fire-department',
    },
    {
      name: 'Play',
      icon: 'videogame-asset',
    },
    {
      name: 'City',
      icon: 'apartment',
    },
    {
      name: 'Beachfront',
      icon: 'beach-access',
    },
    {
      name: 'Countryside',
      icon: 'nature-people',
    },
  ];

interface Props {
  onCategoryChanged: (category: string) => void;
}
  
const ExploreHeader = ({ onCategoryChanged }: Props) => {
    const scrolRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);


  const selectCategory = (id:number) =>{
    const selected = itemsRef.current[id];
    setActiveIndex(id)
    // console.log(id);
    selected?.measure((x) => {
        scrolRef.current?.scrollTo({ x: x, y: 0, animated: true });
      });
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onCategoryChanged(categories[id].name);
  }
    return (
        <View style={styles.container}>
           <View >
                <View style={styles.actionRow}>
                <Link href={'/(modals)/booking'} asChild>
                    <TouchableOpacity>
                    <View style={styles.searchBtn}>
                        <Ionicons name="search" size={24} />
                        <View>
                        <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                        <Text style={{ color: Colors.grey, fontFamily: 'mon' }}>Anywhere · Any week</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.filterBtn}>
                    <Ionicons name="options-outline" size={24} />
                </TouchableOpacity>
                </View>
                <ScrollView 
                ref={scrolRef}
                horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems:'center',
                    gap:20,
                    paddingHorizontal:10
                }}
                >
                    {categories.map((item, id)=>(
                        <TouchableOpacity key={id}
                        ref={(el) => (itemsRef.current[id] = el)}
                        style={activeIndex === id ? styles.categoriesBtnActive : styles.categoriesBtn}
                        onPress={()=>selectCategory(id)}
                        >
                            <MaterialIcons name={item.icon as any} size={24}
                            color={activeIndex === id ? '#000' : Colors.grey}
                            />
                                <Text style={activeIndex === id ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // height: 160,
        paddingTop:40,
        paddingBottom:10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
          width: 1,
          height: 10,
        },
      },
      actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
      },
    
      searchBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 10,
        padding: 14,
        alignItems: 'center',
        width: 280,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#c2c2c2',
        borderRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      },
      filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#A2A0A2',
        borderRadius: 24,
      },
      categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey,
      },
      categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000',
      },
      categoriesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
      },
      categoriesBtnActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8,
      },
});

//make this component available to the app
export default ExploreHeader;
