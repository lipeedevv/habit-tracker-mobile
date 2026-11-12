import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DetalheHabitoScreen } from "./src/Screens/DetalheHabitoScreen";
import { NovoHabitoScreen } from "./src/Screens/NovoHabitoScreen";
import { colors } from "./src/theme";
import { DadosHabito, Habito } from "./src/types";

type Tela = "formulario" | "detalhe";

export default function App() {
  const [tela, setTela] = useState<Tela>("formulario");
  const [habito, setHabito] = useState<Habito | null>(null);
  const [editando, setEditando] = useState(false);

  function salvar(dados: DadosHabito) {
    if (editando && habito) {
      setHabito({ ...habito, ...dados });
    } else {
      setHabito({
        id: Date.now().toString(),
        ...dados,
        criadoEm: new Date().toISOString(),
        sequencia: 0,
        totalConclusoes: 0,
      });
    }

    setEditando(false);
    setTela("detalhe");
  }

  function iniciarEdicao() {
    setEditando(true);
    setTela("formulario");
  }

  function excluir() {
    setHabito(null);
    setTela("formulario");
  }

  function voltarDoFormulario() {
    setEditando(false);
    if (habito) setTela("detalhe");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        {tela === "detalhe" && habito ? (
          <DetalheHabitoScreen
            habito={habito}
            onVoltar={() => setTela("formulario")}
            onEditar={iniciarEdicao}
            onExcluir={excluir}
          />
        ) : (
          <NovoHabitoScreen
            key={editando ? "editar" : "novo"}
            habitoInicial={editando ? habito : null}
            onSalvar={salvar}
            onVoltar={voltarDoFormulario}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});