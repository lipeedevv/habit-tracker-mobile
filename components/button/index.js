import { Pressable, StyleSheet, Text } from 'react-native';

export function Button({ text, onClick, disabled = false }) {
    return (
        <Pressable
            accessibilityRole="button"
            disabled={disabled}
            onPress={onClick}
            style={[styles.button, disabled && styles.disabled]}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: { backgroundColor: '#43BB61', borderRadius: 16, padding: 14 },
    disabled: { opacity: 0.45 },
    text: { color: '#102E26', fontSize: 16, fontWeight: '600' },
});
