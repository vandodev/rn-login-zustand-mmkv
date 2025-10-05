import { create } from "zustand"
import { getItem, removeItem, setItem } from './storange'

interface AuthStore {
    isAuthenticated: boolean
    accessToken: string | null
    refreshToken: string | null
    user: object | null
    accessTokenExpiration: number | null
    Login: (username: string, password: string) => Promise<boolean>
    refreshAccessToken: () => Promise<boolean>
    Logout: () => void
    checkAuth: () => void
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

            setItem("authData", authData)

            set(authData)
            return true;
        } catch(error){
            console.error(error)
            return false
        }
    },

    Logout: async () => {
        removeItem('authData')
        set({
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null,
            user: null,
            accessTokenExpiration: null
        })
    },

    refreshAccessToken: async () =>{
        try{
            const {refreshToken} = get();
            const res = await  fetch('https://dummyjson.com/auth/refresh',{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({refreshToken}),
                credentials: 'include'
            });
            
            if(!res.ok){
                throw new Error("Invalid credentials")
            }

            const data = await res.json();
            const updateAuthData = {
                ...get(),
                accessToken: data.accessToken,
                refreshToken:data.refreshToken,
                accessTokenExpiration: Date.now() * 60 * 60 * 1000,
            };

            set(updateAuthData);
            setItem('authData', updateAuthData)
            return true
        } catch(error){
            console.error('Error refreshing access token', error);
            get().Logout();
            return false
        }
    },
   


    checkAuth: async () =>  {
        const authData = getItem('authData');
        if(!authData){            
            return false
        }

        const {accessToken, accessTokenExpiration, refreshToken} = authData
       
        if(accessToken && accessTokenExpiration && accessTokenExpiration > Date.now()){
            set(authData)
            return true
        }

        if(refreshToken){
            set(authData)
            return await get().refreshAccessToken();
        }

        return false
    }
}))

