import HabitoModal from './modal';
import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Keyboard,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const formatoData = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
});

export default function Home() {
    const [habitos, setHabitos] = useState([]);
    const [adicionando, setAdicionando] = useState(false);
    const [nome, setNome] = useState('');
    const proximoId = useRef(1);

    const data = formatoData.format(new Date());
    const dataFormatada = data.charAt(0).toUpperCase() + data.slice(1);
    const concluidos = habitos.filter((habito) => habito.concluido).length;
    const progresso = habitos.length
        ? Math.round((concluidos / habitos.length) * 100)
        : 0;

    function fecharFormulario() {
        setNome('');
        setAdicionando(false);
        Keyboard.dismiss();
    }

    function adicionarHabito() {
        const nomeLimpo = nome.trim();
        if (!nomeLimpo) return;

        const novoHabito = {
            id: proximoId.current++,
            nome: nomeLimpo,
            concluido: false,
        };

        setHabitos((lista) => [...lista, novoHabito]);
        fecharFormulario();
    }

    function alternarConclusao(id) {
        setHabitos((lista) =>
            lista.map((habito) =>
                habito.id === id
                    ? { ...habito, concluido: !habito.concluido }
                    : habito,
            ),
        );
    }

    return (
        <View style={styles.tela}>
            <StatusBar style="light" />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.conteudo}
            >
                <View style={styles.cabecalho}>
                    <Text style={styles.marca}>HABIT TRACKER</Text>
                    <Text accessibilityRole="header" style={styles.data}>
                        {dataFormatada}
                    </Text>

                    <View style={styles.linhaProgresso}>
                        <Text style={styles.textoClaro}>Progresso de hoje</Text>
                        <Text style={styles.textoClaro}>{progresso}%</Text>
                    </View>

                    <View
                        style={styles.barra}
                        accessibilityRole="progressbar"
                        accessibilityLabel="Progresso de hoje"
                        accessibilityValue={{ min: 0, max: 100, now: progresso }}
                    >
                        <View style={[styles.preenchimento, { width: `${progresso}%` }]} />
                    </View>
                </View>

                <View style={styles.lista}>
                    <Text accessibilityRole="header" style={styles.titulo}>Hábitos de hoje</Text>

                    {habitos.length === 0 && (
                        <View style={styles.vazio}>
                            <Text style={styles.titulo}>Nenhum hábito para hoje</Text>
                            <Text style={styles.secundario}>
                                Toque no + para criar o primeiro.
                            </Text>
                        </View>
                    )}

                    {habitos.map((habito) => (
                        <Pressable
                            key={habito.id}
                            accessibilityRole="checkbox"
                            accessibilityLabel={habito.nome}
                            accessibilityState={{ checked: habito.concluido }}
                            onPress={() => alternarConclusao(habito.id)}
                            style={[styles.cartao, habito.concluido && styles.cartaoConcluido]}
                        >
                            <View style={[styles.circulo, habito.concluido && styles.marcado]}>
                                {habito.concluido && <Text style={styles.check}>✓</Text>}
                            </View>

                            <View style={styles.detalhes}>
                                <Text style={styles.titulo}>{habito.nome}</Text>
                                <Text style={styles.secundario}>
                                    {habito.concluido ? 'Concluído' : 'Diário'}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>

            <Pressable
                accessibilityRole="button"
                accessibilityLabel="Criar hábito"
                onPress={() => setAdicionando(true)}
                style={styles.botaoAdicionar}
            >
                <Text style={styles.mais}>+</Text>
            </Pressable>

            <Modal
                visible={adicionando}
                animationType="slide"
                transparent
                onRequestClose={fecharFormulario}
            >
                <HabitoModal
                    nome={nome}
                    setNome={setNome}
                    adicionarHabito={adicionarHabito}
                    onClose={fecharFormulario}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: '#F4FAF6' },
    conteudo: { paddingBottom: 100 },
    cabecalho: {
        backgroundColor: '#074835',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 64,
        paddingBottom: 24,
    },
    marca: {
        color: '#BEEBD0',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 1.4,
    },
    data: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 8,
    },
    linhaProgresso: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        marginBottom: 10,
    },
    textoClaro: { color: '#FFFFFF', fontSize: 14 },
    barra: {
        height: 12,
        borderRadius: 6,
        backgroundColor: '#347662',
        overflow: 'hidden',
    },
    preenchimento: { height: '100%', backgroundColor: '#73DC8D' },
    lista: {
        width: '100%',
        maxWidth: 480,
        alignSelf: 'center',
        padding: 24,
        gap: 12,
    },
    vazio: { alignItems: 'center', marginTop: 36, gap: 4 },
    titulo: { color: '#102E26', fontSize: 16, fontWeight: '600' },
    secundario: { color: '#486359', fontSize: 14 },
    cartao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        borderWidth: 1,
        borderColor: '#D2E2D8',
        borderRadius: 18,
        padding: 14,
    },
    cartaoConcluido: { backgroundColor: '#E3F5E8' },
    detalhes: { flex: 1, gap: 3 },
    circulo: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#60776D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marcado: { backgroundColor: '#287C40', borderColor: '#287C40' },
    check: { color: '#FFFFFF', fontWeight: '700' },
    mais: { color: '#102E26', fontSize: 34 },
    botaoAdicionar: {
        position: 'absolute',
        right: 24,
        bottom: 36,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#43BB61',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
