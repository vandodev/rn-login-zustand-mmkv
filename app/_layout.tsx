import { Stack } from "expo-router";

export default function Layout() {
  const isAltenticated = true
  return (  
    <Stack>

      <Stack.Protected guard={isAltenticated}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      </Stack.Protected>

      <Stack.Protected guard={!isAltenticated}>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="register" options={{headerShown: false}} />
      </Stack.Protected>
    </Stack>
  );
}

