import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const LoginScreen = () => {
    const [userName, setUsername] = useState("")
    const [passWord, setPassWord] =  useState("")
    return(
        <View style={styles.container}>     

            <Text>Nome de usuário</Text>
            <TextInput value={userName} placeholder="Nome de osoário" style={styles.input}/>

            <Text>Senha</Text>
            <TextInput value={passWord} placeholder="Senha" secureTextEntry style={styles.input}/>

            <Button title="Entrar"  onPress={() => {}}/>
        
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal:20
    },
    input:{
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
})