// app/index.tsx
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Boas vindas!</Text>
        <Text style={styles.subtitle}>Entre para cuidar das suas plantas</Text>

        <TextInput
            placeholder="Email"
            placeholderTextColor="#a9a9a9"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            placeholder="Senha"
            placeholderTextColor="#a9a9a9"
            style={styles.input}
            secureTextEntry
        />

        <Pressable style={styles.button} onPress={() => console.log('Botão "Entrar" pressionado')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <Link href="/cadastro" asChild>
            <Pressable style={styles.linkButton}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
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
        backgroundColor: '#606C38', // de inicio vou tentar manter a mesma palteta de cores do protótipo, mas depois posso mudar
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#DDA15E',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#FEFAE0',
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
        color: '#fff',
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