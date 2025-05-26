import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    setToken: (token: string | null) => void;
    clearToken: () => void;
    }

    const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
        token: null,
        isAuthenticated: false,

        // definir o token quando o usuário faz login
        setToken: (newToken) => {
            set({ token: newToken, isAuthenticated: !!newToken });
        },

        // limpar o token quando o usuário faz logout
        clearToken: () => {
            set({ token: null, isAuthenticated: false });
        },
        }),
        {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useAuthStore;