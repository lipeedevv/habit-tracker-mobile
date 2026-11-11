import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Button } from '../button';

export default function HabitoModal({
    nome,
    setNome,
    adicionarHabito,
    onClose,
}) {
    return (
        <KeyboardAvoidingView
            style={styles.fundoPainel}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Novo hábito</Text>

                <TextInput
                    autoFocus
                    accessibilityLabel="Nome do hábito"
                    value={nome}
                    onChangeText={setNome}
                    onSubmitEditing={adicionarHabito}
                    returnKeyType="done"
                    placeholder="Ex.: Beber 2 L de água"
                    placeholderTextColor="#60776D"
                    maxLength={80}
                    style={styles.input}
                />

                <View style={styles.acoes}>
                    <Button text="Cancelar" onClick={onClose} />
                    <Button
                        text="Adicionar"
                        onClick={adicionarHabito}
                        disabled={!nome.trim()}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: '#102E26',
        fontSize: 16,
        fontWeight: '600',
    },
    fundoPainel: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    formulario: {
        gap: 12,
        backgroundColor: '#F4FAF6',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        paddingBottom: 36,
    },
    input: {
        minHeight: 50,
        borderWidth: 1,
        borderColor: '#D2E2D8',
        borderRadius: 18,
        paddingHorizontal: 16,
        color: '#102E26',
        fontSize: 16,
    },
    acoes: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
});