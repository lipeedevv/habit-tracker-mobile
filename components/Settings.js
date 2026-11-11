import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { Button, BUTTON_PRIMARY, BUTTON_SECONDARY } from "./button";

export function Settings() {
  const [nome, setNome] = useState("Visitante");
  const [email, setEmail] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);

  function abrirEdicao() {
    setNovoNome(nome === "Visitante" ? "" : nome);
    setNovoEmail(email);
    setModalVisivel(true);
  }

  function salvarInformacoes() {
    if (novoNome.trim() === "" || novoEmail.trim() === "") {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    setNome(novoNome.trim());
    setEmail(novoEmail.trim());
    setModalVisivel(false);

    Alert.alert("Sucesso", "Informações atualizadas!");
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.back}>← Voltar</Text>
        </Pressable>

        <Text style={styles.title}>Configurações</Text>
      </View>

      <View style={styles.profile}>
        <Pressable style={styles.photo}>
          <Text style={styles.photoText}>Alterar foto</Text>
        </Pressable>

        <Text style={styles.name}>{nome}</Text>
      </View>

      <Text style={styles.subtitle}>Informações da conta</Text>

      <View style={styles.account}>
        <View style={styles.info}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.description}>{nome}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.description}>
            {email || "Nenhum e-mail cadastrado"}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Tipo de conta</Text>
          <Text style={styles.description}>Conta local</Text>
        </View>

        <View style={styles.editButton}>
          <Button
            text="Editar informações"
            type={BUTTON_SECONDARY}
            onClick={abrirEdicao}
          />
        </View>
      </View>

      <View style={styles.createButton}>
        <Button
          text="Criar conta"
          type={BUTTON_PRIMARY}
          onClick={() =>
            Alert.alert("Criar conta", "Navegação entre as telas em desenvolvimento.")
          }
        />
      </View>

      <Modal
        visible={modalVisivel}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Editar informações</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={novoNome}
              onChangeText={setNovoNome}
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={novoEmail}
              onChangeText={setNovoEmail}
            />

            <Button
              text="Salvar alterações"
              type={BUTTON_PRIMARY}
              onClick={salvarInformacoes}
            />

            <Button
              text="Cancelar"
              type={BUTTON_SECONDARY}
              onClick={() => setModalVisivel(false)}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FCF8",
  },

  content: {
    width: "100%",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    position: "relative",
  },

  back: {
    fontSize: 13,
    color: "#222222",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },

  profile: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  photo: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
  },

  photoText: {
    fontSize: 10,
    color: "#555555",
  },

  name: {
    fontSize: 13,
    marginTop: 12,
    color: "#222222",
  },

  subtitle: {
    fontSize: 12,
    color: "#222222",
    marginBottom: 10,
  },

  account: {
    borderWidth: 1,
    borderColor: "#C5D0CA",
    borderRadius: 16,
    padding: 15,
  },

  info: {
    marginBottom: 18,
  },

  label: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 5,
  },

  description: {
    fontSize: 12,
    color: "#999999",
  },

  editButton: {
    width: 180,
    alignSelf: "center",
    marginTop: 5,
  },

  createButton: {
    width: 130,
    alignSelf: "center",
    marginTop: 18,
  },

  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 20,
  },

  modal: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#073E32",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#C5D0CA",
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    color: "#222222",
  },
});