import { useAuthStore } from "@/store/authStore"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Page = () => {
    const {Logout} = useAuthStore()
    return(
        <View>
            <Text>Tela perfil</Text>
            <Button title="Logout"/>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({})