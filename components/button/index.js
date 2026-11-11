
import { Pressable, Text, StyleSheet } from "react-native";

export const BUTTON_PRIMARY = "primary";
export const BUTTON_SECONDARY = "secondary";
export const BUTTON_DANGER = "danger";
export const BUTTON_SUCCESS = "success";

export function Button({ type = BUTTON_PRIMARY, text, onClick }) {

    const buttonStyle = {
        [BUTTON_PRIMARY]: styles.buttonPrimary,
        [BUTTON_SECONDARY]: styles.buttonSecondary,
        [BUTTON_DANGER]: styles.buttonDanger,
        [BUTTON_SUCCESS]: styles.buttonSuccess
    };

    return (
        <Pressable
            style={buttonStyle[type]}
            onPress={onClick}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: "#1d2f3c",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },

    buttonSecondary: {
        backgroundColor: "#486072",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },

    buttonDanger: {
        backgroundColor: "#ff0000",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },

    buttonSuccess: {
        backgroundColor: "#026800",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },

    buttonText: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center"
    }
});
