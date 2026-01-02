import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const TabLayout = () => {
    const insets = useSafeAreaInsets();
    return(
       <View style={[
            styles.container,
            { paddingTop: insets.top }
        ]}>

           <StatusBar 
                barStyle="dark-content"  // Texto escuro (horas, bateria, etc.)
                backgroundColor="#FFFFFF" // Fundo branco
                translucent={false}       // Não translúcido (Android)
            />

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
        </View>
    )
}

export default TabLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    }
});