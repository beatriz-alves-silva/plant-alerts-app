import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function CadastroScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Criar Conta</Text>
        <TextInput placeholder="Nome" placeholderTextColor="#a9a9a9" style={styles.input} />
        <TextInput placeholder="Email" placeholderTextColor="#a9a9a9" style={styles.input} />
        <TextInput placeholder="Senha" placeholderTextColor="#a9a9a9" style={styles.input} secureTextEntry />
        <TextInput placeholder="Confirmar senha" placeholderTextColor="#a9a9a9" style={styles.input} secureTextEntry />
        <Pressable style={styles.button} onPress={() => console.log('Botão Criar Conta Pressionado')}>
            <Text style={styles.buttonText}>Criar Conta</Text>
        </Pressable>
        <Link href="/" asChild>
            <Pressable style={styles.linkButton}>
                <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
            </Pressable>
        </Link>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#606C38',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#DDA15E',
    },
    input: {
        height: 50,
        borderColor: '#DDA15E',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#606C38',
        color: '#FEFAE0',
    },
    button: {
        backgroundColor: '#DDA15E',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontSize: 16,
    },
    linkButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    linkText: {
        color: '#FEFAE0',
        fontSize: 14,
    },
});