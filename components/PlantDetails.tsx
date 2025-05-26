import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface PlantDetailDisplayProps {
    name: string | undefined; 
    imageSource: ImageSourcePropType | undefined; 
}

const PlantDetailDisplay: React.FC<PlantDetailDisplayProps> = ({ name, imageSource }) => {
    if (!name || !imageSource) {
        return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Informações da planta não disponíveis.</Text>
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <Image source={imageSource} style={styles.plantImage} accessibilityLabel={`Imagem de ${name}`} />
        <Text style={styles.plantName}>{name}</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#F0E68C', 
    },
    plantImage: {
        width: 250,
        height: 250,
        borderRadius: 125, 
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#606C38',
    },
    plantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#283618',
        textAlign: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    }
});

export default PlantDetailDisplay;