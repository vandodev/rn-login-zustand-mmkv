// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "react-native"
import "react-native-reanimated"

export const unstable_settings = {
  initialRouteName: "(tabs)", // rota inicial
}

export default function RootLayout() {
  const colorScheme = useColorScheme() // detecta claro/escuro

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen
          name="index"
          options={{ presentation: "modal", title: "Modal", headerShown:false}}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
