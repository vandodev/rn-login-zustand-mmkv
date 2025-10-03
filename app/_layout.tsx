import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";

export default function Layout() {
  const {isAuthenticated} = useAuthStore();
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

