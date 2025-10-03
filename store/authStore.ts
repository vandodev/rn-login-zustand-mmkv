import { create } from "zustand"

interface AuthStore {
    isAuthenticated: boolean
    setIsAuthenticated: (isAuthenticated: boolean) => void 
    Login: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set({isAuthenticated}),
    Login: () => set({isAuthenticated: true}),
}))