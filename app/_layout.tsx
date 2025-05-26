import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
        <Stack.Screen name="index" options={{ title: 'Login' }} />
        <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
        <Stack.Screen name="minhasPlantas" options={{ title: 'Minhas Plantas' }} />
        <Stack.Screen name="DetalhePlanta" options={{ title: 'Detalhes Planta' }} />
        </Stack>
    );
}