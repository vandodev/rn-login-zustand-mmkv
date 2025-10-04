import { create } from "zustand"

interface AuthStore {
    isAuthenticated: boolean
    accessToken: string | null
    refreshToken: string | null
    user: object | null
    accessTokenExpiration: number | null
    Login: (username: string, password: string) => Promise<boolean>
    Logout: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    user: null,
    accessTokenExpiration: null,

    Login: async (username: string, password: string) => {
        try{
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username,password}),
                credentials: 'include'
            });

            if(!response.ok){
                throw new Error("Login faild")
            }

            const data = await response.json();
            // console.log(data);

            const authData = {
                isAuthenticated: true,
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
                user: data,
                accessTokenExpiration: Date.now() + (60 * 60 * 10000)
            }
            set(authData)
            return true;
        } catch(error){
            console.error(error)
            return false
        }
    },

    Logout: () => 
        set({
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
            user: null,
            accessTokenExpiration: null
        }),
}))