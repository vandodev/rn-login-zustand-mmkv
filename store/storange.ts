// import {MMKV} from "react-native-mmkv"
import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
    id: 'auth-storange',
})

// export const setItem = (key: string, value: object) => {
//     storage.set(key, JSON.stringify(value))
// }

// export const storage = new MMKV({
//     id: 'auth-storange',
// })

export const setItem = (key: string, value: object) => {
    storage.set(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
}

export const removeItem = (key: string) => {
    storage.remove(key)
}