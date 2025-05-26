import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

interface PlantCardProps {
    name: string;
    nextNotification: string;
    imageSource: any;
    }

    const PlantCard: React.FC<PlantCardProps> = ({ name, nextNotification, imageSource }) => {
        const router = useRouter();

        const handleCardPress = () => {
            console.log('Card pressionado:', name);
            router.push({ 
            pathname: '../app/DetalhePlanta.tsx', 
            params: { plantName: name, plantImageUri: typeof imageSource === 'object' && imageSource.uri ? imageSource.uri : undefined } 
            });
        };

        return (
        <TouchableOpacity onPress={handleCardPress} activeOpacity={0.7}>
            <View style={styles.card}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.notificationText}>Próxima notificação</Text>
                <Text style={styles.notificationDate}>{nextNotification}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                <Feather name="edit-2" size={24} color="#606C38" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                <Feather name="bell-off" size={24} color="#606C38" />
                </TouchableOpacity>
            </View>
            </View>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FEFAE0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#DDA15E',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5, 
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#283618', 
    },
    notificationText: {
        fontSize: 14,
        color: '#6C584C',
        marginTop: 2,
    },
    notificationDate: {
        fontSize: 14,
        color: '#6C584C',
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    iconButton: {
        marginLeft: 10,
    },
});

export default PlantCard;