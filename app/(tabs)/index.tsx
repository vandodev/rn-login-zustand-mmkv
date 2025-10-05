import { useAuthStore } from "@/store/authStore"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Page = () => {
    const {user} = useAuthStore()
    return(
        <View>
            <Text>Bem vindo {user?.username}</Text>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({})