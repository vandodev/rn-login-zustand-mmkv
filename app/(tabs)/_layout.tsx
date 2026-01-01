import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
    return(
        
         <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#007AFF", // cor do ícone ativo
                tabBarInactiveTintColor: "#8E8E93", // cor do ícone inativo
                headerShown: false, // se quiser ocultar o cabeçalho
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home", // título da aba
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={size} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: "Perfil", // título da aba
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={size} 
                            color={color} 
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabLayout