import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from './button';

function Campo({ rotulo, placeholder, tipo = 'nome' }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const ehSenha = tipo === 'senha';

  return (
    <View style={styles.campo}>
      <Text style={styles.rotulo}>{rotulo} *</Text>

      <View style={styles.caixa}>
        <TextInput
          accessibilityLabel={rotulo}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#60776D"
          keyboardType={tipo === 'email' ? 'email-address' : 'default'}
          autoCapitalize={tipo === 'nome' ? 'words' : 'none'}
          autoCorrect={tipo === 'nome'}
          secureTextEntry={ehSenha && !mostrarSenha}
        />

        {ehSenha && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`${mostrarSenha ? 'Ocultar' : 'Mostrar'} ${rotulo.toLowerCase()}`}
            onPress={() => setMostrarSenha(!mostrarSenha)}
            style={styles.botaoSenha}
          >
            <Text style={styles.acaoSenha}>
              {mostrarSenha ? 'Ocultar' : 'Mostrar'}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default function Cadastro() {
  function criarConta() {
    Alert.alert('Cadastro', 'Tela de cadastro em desenvolvimento.');
  }

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.formulario}>
          <View style={styles.cabecalho}>
            <Text style={styles.marca}>HABIT TRACKER</Text>
            <Text style={styles.titulo}>Criar conta</Text>
            <Text style={styles.descricao}>
              Cadastro local: seus dados ficam somente neste aparelho.
            </Text>
          </View>

          <Campo rotulo="Nome completo" placeholder="Ex.: Felipe Sá" />
          <Campo rotulo="E-mail" placeholder="voce@email.com" tipo="email" />
          <Campo
            rotulo="Senha"
            placeholder="Mínimo de 6 caracteres"
            tipo="senha"
          />
          <Campo
            rotulo="Confirmar senha"
            placeholder="Repita a senha"
            tipo="senha"
          />

          <Button text="Criar conta" onClick={criarConta} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4FAF6',
  },
  conteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  formulario: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 34,
    gap: 6,
  },
  marca: {
    color: '#287C40',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
  titulo: {
    color: '#073E32',
    fontSize: 26,
    fontWeight: '700',
  },
  descricao: {
    color: '#486359',
    textAlign: 'center',
    fontSize: 14,
  },
  campo: {
    marginBottom: 20,
    gap: 4,
  },
  rotulo: {
    color: '#102E26',
    fontSize: 14,
    fontWeight: '600',
  },
  caixa: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#D2E2D8',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    minHeight: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#102E26',
  },
  botaoSenha: {
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  acaoSenha: {
    color: '#287C40',
    fontWeight: '600',
  },
});