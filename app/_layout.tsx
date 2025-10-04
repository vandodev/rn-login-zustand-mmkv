import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const {isAuthenticated, checkAuth} = useAuthStore();
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() =>{
    const init = async () =>{
      await checkAuth();
      setIsLoading(false)
    }

    init()
  }, [])

  if(isLoading){
    return (
      <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
        <ActivityIndicator size="large"/>      
      </View>
    )
  }
  
  return (  
    <Stack>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      </Stack.Protected>

      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="register" options={{headerShown: false}} />
      </Stack.Protected>
    </Stack>
  );
}

