import { useAuthStore } from "@/store/authStore"
import React, { useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"

const LoginScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassWord] =  useState("")
    const { Login } = useAuthStore()

    const handleLogin = async () => {
      const success = await Login(username,password);

      if(!success){
        Alert.alert("Erro",'Credenciais inválidas')
      }
    }

    return(
        <View style={styles.container}>     

            <Text>Nome de usuário</Text>
            <TextInput
                value={username} 
                onChangeText={setUsername} 
                placeholder="Nome de osoário" 
                style={styles.input}
             />

            <Text>Senha</Text>
            <TextInput 
                value={password} 
                onChangeText={setPassWord} 
                placeholder="Senha" 
                secureTextEntry 
                style={styles.input}
            />

            <Button title="Entrar"  onPress={handleLogin}/>
        
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