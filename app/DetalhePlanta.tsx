import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import PlantDetails from '../components/PlantDetails';

const placeholderImage = require('../assets/icon.png');

const getPlantImageByKey = (key: string | undefined): ImageSourcePropType => {
    if (key === 'cacto') {
        return require('../assets/cacto.jpg');
    }
    console.log('Nenhuma chave de imagem correspondente, usando placeholder.');
    return placeholderImage; 
};

export default function DetalhePlanta() {
    const params = useLocalSearchParams<{ plantName?: string; plantImageKey?: string }>();
    const plantName = params.plantName;
    const imageSource = getPlantImageByKey(params.plantImageKey);
    const screenTitle = plantName || 'Detalhes da Planta';

    return (
        <View style={styles.screenContainer}>
        <Stack.Screen options={{ title: screenTitle }} />
        <PlantDetails name={plantName} imageSource={imageSource} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
});