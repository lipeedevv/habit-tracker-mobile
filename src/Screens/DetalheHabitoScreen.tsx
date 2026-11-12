import { ScrollView, StyleSheet, View } from "react-native";
import { Botao } from "../Components/Botao";
import { CartaoInfo } from "../Components/CartaoInfo";
import { CartaoSequencia } from "../Components/CartaoSequencia";
import { Header } from "../Components/Header";
import { colors, spacing } from "../theme";
import { Habito } from "../types";
import { descreverFrequencia, formatarData } from "../Utils/data";

type DetalheHabitoScreenProps = {
  habito: Habito;
  onVoltar: () => void;
  onEditar: () => void;
  onExcluir: () => void;
};

export function DetalheHabitoScreen({
  habito,
  onVoltar,
  onEditar,
  onExcluir,
}: DetalheHabitoScreenProps) {
  return (
    <View style={styles.tela}>
      <Header titulo={habito.titulo} onVoltar={onVoltar} />

      <ScrollView contentContainerStyle={styles.conteudo}>
        <CartaoSequencia sequencia={habito.sequencia} totalConclusoes={habito.totalConclusoes} />

        <CartaoInfo
          linhas={[
            { rotulo: "Categoria", valor: habito.categoria },
            {
              rotulo: "Frequência",
              valor: descreverFrequencia(habito.frequencia, habito.diasSemana),
            },
            { rotulo: "Criado em", valor: formatarData(habito.criadoEm) },
          ]}
        />

        <View style={styles.acoes}>
          <Botao texto="Editar" onPress={onEditar} style={styles.botaoAcao} />
          <Botao texto="Excluir" variante="perigo" onPress={onExcluir} style={styles.botaoAcao} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: colors.background,
  },
  conteudo: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  acoes: {
    flexDirection: "row",
    gap: spacing.md,
  },
  botaoAcao: {
    flex: 1,
  },
});