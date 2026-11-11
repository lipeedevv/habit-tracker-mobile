
import { View, Text, StyleSheet, Alert, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { Button, BUTTON_PRIMARY, BUTTON_DANGER, BUTTON_SECONDARY } from "../components/button";

export function Settings({ onBack }) {

    const [habit, setHabit] = useState("Beber 2L de água");
    const [concluidos, setConcluidos] = useState(1);

    function editar() {
        Alert.alert("Editar", "Funcionalidade em desenvolvimento.");
    }

    function excluir() {
        setHabit("");
    }

    function novoHabito() {
        Alert.alert("Novo hábito", "Funcionalidade em desenvolvimento.");
    }

    function apagarDados() {
        setHabit("");
        setConcluidos(0);
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >

            <View style={styles.header}>
                <Pressable onPress={onBack}>
                    <Text style={styles.back}>← Voltar</Text>
                </Pressable>

                <Text style={styles.title}>Configurações</Text>
            </View>

            <View style={styles.profile}>
                <Pressable style={styles.photo}>
                    <Text style={styles.photoText}>Alterar foto</Text>
                </Pressable>

                <Text style={styles.name}>Visitante</Text>
            </View>

            <Text style={styles.subtitle}>Informações da conta</Text>

            <View style={styles.account}>
                <Text style={styles.description}>
                    Você ainda não tem uma conta local
                </Text>

                <View style={styles.createButton}>
                    <Button
                        text="Criar conta"
                        type={BUTTON_PRIMARY}
                    />
                </View>
            </View>

            <View style={styles.statistics}>
                <View style={styles.stat}>
                    <Text style={styles.number}>
                        {habit === "" ? 0 : 1}
                    </Text>
                    <Text style={styles.statText}>Hábito</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.number}>{concluidos}</Text>
                    <Text style={styles.statText}>Conclusões</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.number}>
                        {concluidos > 0 ? 1 : 0}
                    </Text>
                    <Text style={styles.statText}>Melhor streak</Text>
                </View>
            </View>

            <View style={styles.habitHeader}>
                <Text style={styles.subtitle}>Meus hábitos</Text>

                <Pressable onPress={novoHabito}>
                    <Text style={styles.newHabit}>+ Novo</Text>
                </Pressable>
            </View>

            {habit !== "" && (
                <View style={styles.habit}>
                    <View style={styles.habitInfo}>
                        <Text style={styles.habitName}>{habit}</Text>
                        <Text style={styles.habitDescription}>
                            Saúde - diário
                        </Text>
                    </View>

                    <View style={styles.actions}>
                        <View style={styles.editButton}>
                            <Button
                                text="Editar"
                                type={BUTTON_SECONDARY}
                                onClick={editar}
                            />
                        </View>

                        <View style={styles.deleteButton}>
                            <Button
                                text="Excluir"
                                type={BUTTON_DANGER}
                                onClick={excluir}
                            />
                        </View>
                    </View>
                </View>
            )}

            <Text style={styles.subtitle}>Dados do aplicativo</Text>

            <Text style={styles.infoText}>
                Tudo é salvo apenas neste aparelho e funciona offline.
            </Text>

            <View style={styles.eraseButton}>
                <Button
                    text="Apagar todos os dados"
                    type={BUTTON_DANGER}
                    onClick={() => Alert.alert(
                        "Apagar dados",
                        "Deseja apagar todos os dados?",
                        [
                            { text: "Cancelar" },
                            { text: "Apagar", onPress: apagarDados }
                        ]
                    )}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F7FCF8"
    },

    content: {
        width: "100%",
        maxWidth: 400,
        alignSelf: "center",
        padding: 20,
        paddingTop: 30,
        paddingBottom: 40,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    back: {
        fontSize: 13,
        color: "#222222"
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222222",
    },

    profile: {
        alignItems: "center",
        marginTop: 25,
        marginBottom: 25
    },

    photo: {
        width: 95,
        height: 95,
        borderRadius: 50,
        backgroundColor: "#DDDDDD",
        justifyContent: "center",
        alignItems: "center"
    },

    photoText: {
        fontSize: 10,
        color: "#555555"
    },

    name: {
        fontSize: 13,
        marginTop: 12,
        color: "#222222"
    },

    subtitle: {
        fontSize: 12,
        color: "#222222",
        marginBottom: 10
    },

    account: {
        borderWidth: 1,
        borderColor: "#C5D0CA",
        borderRadius: 16,
        padding: 12
    },

    description: {
        fontSize: 11,
        color: "#999999"
    },

    createButton: {
        width: 110
    },

    statistics: {
        flexDirection: "row",
        gap: 8,
        marginTop: 14
    },

    stat: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#BFCBC4",
        borderRadius: 16,
        paddingVertical: 15,
        alignItems: "center"
    },

    number: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222222"
    },

    statText: {
        fontSize: 11,
        color: "#222222"
    },

    habitHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 18
    },

    newHabit: {
        color: "#00A85A",
        fontSize: 11
    },

    habit: {
        borderWidth: 1,
        borderColor: "#C5D0CA",
        borderRadius: 16,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    habitInfo: {
        flex: 1
    },

    habitName: {
        fontSize: 12,
        color: "#222222"
    },

    habitDescription: {
        fontSize: 9,
        color: "#999999",
        marginTop: 3
    },

    actions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    editButton: {
        width: 60
    },

    deleteButton: {
        width: 68
    },

    infoText: {
        fontSize: 9,
        color: "#AAAAAA",
        marginBottom: 12
    },

    eraseButton: {
        marginTop: 5
    }
});
