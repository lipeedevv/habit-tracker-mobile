
import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";

export function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrar() {
        Alert.alert("Login", "Botão de login clicado!");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>HABIT TRACKER</Text>

            <View style={styles.form}>

                <Input
                    placeholder="Gmail:"
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    placeholder="Senha:"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />

                <Button
                    text="Login"
                    onClick={onLogin}
                />

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5faf7",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#004d40",
        textAlign: "center"
    },

    subtitle: {
        fontSize: 16,
        color: "#486072",
        textAlign: "center",
        marginTop: 10
    },

    form: {
        width: "100%",
        maxWidth: 400,
        marginTop: 35,
        backgroundColor: "#ffffff",
        padding: 25,
        borderRadius: 15
    }
});
