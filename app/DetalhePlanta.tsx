// app/DetalhePlantaScreen.tsx
import React from 'react';
import { View, StyleSheet } 
from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import PlantDetailDisplay from '../components/PlantDetails';

const placeholderImage = require('../../assets/icon.png'); 

export default function DetalhePlantaScreen() {
    const params = useLocalSearchParams<{ plantName?: string; plantImageUri?: string }>();
    const plantName = params.plantName;
    const imageSource = params.plantImageUri ? { uri: params.plantImageUri } : placeholderImage;
    const screenTitle = plantName || 'Detalhes da Planta';

    return (
        <View style={styles.screenContainer}>
        <Stack.Screen options={{ title: screenTitle }} />
        <PlantDetailDisplay name={plantName} imageSource={imageSource} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
});