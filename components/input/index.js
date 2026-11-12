
import { View, TextInput, StyleSheet } from "react-native";

export function Input({ placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16
    },

    input: {
        borderWidth: 1,
        borderColor: "#026800",
        borderRadius: 8,
        padding: 10
    }
});
