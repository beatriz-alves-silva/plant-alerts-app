import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PlantCard from '../components/PlantCard';
import { Feather } from '@expo/vector-icons';

// const cactus1 = require('../../assets/adaptive-icon.png');
// const cactus2 = require('../../assets/icon.png');
// const cactus3 = require('../../assets/splash-icon.png');


interface Plant {
    id: string;
    name: string;
    nextNotification: string;
    imageSource: any;
    imageKey: string;
}

// dados de exemplo
const plantsData: Plant[] = [
  { id: '1', name: 'Cacto Bola', nextNotification: '26/03', imageSource: require('../assets/cacto.jpg'), imageKey: 'cacto' /* ou cactus1 */ },
  { id: '2', name: 'Suculenta Jade', nextNotification: '28/03', imageSource: require('../assets/cacto.jpg'), imageKey: 'cacto'/* ou cactus2 */ },
  { id: '3', name: 'Samambaia', nextNotification: '30/03', imageSource: require('../assets/cacto.jpg'), imageKey: 'cacto'/* ou cactus3 */ },
];

export default function MinhasPlantasScreen() {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.listContainer}>
            {plantsData.map((plant) => (
                <PlantCard
                    key={plant.id}
                    id={plant.id}
                    name={plant.name}
                    nextNotification={plant.nextNotification}
                    imageSource={plant.imageSource}
                    imageKey={plant.imageKey}
                />
            ))}
        </ScrollView>
        <TouchableOpacity style={styles.fab} onPress={() => console.log('FAB Pressionado')}>
            <Feather name="plus" size={30} color="#FEFAE0" />
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#606C38',
        // padding: 15,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 15, 
        paddingTop: 15, 
    },
    fab: {
        position: 'absolute',
        right: 25,
        bottom: 25,
        backgroundColor: '#606C38',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
});