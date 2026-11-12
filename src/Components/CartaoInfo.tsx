import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../theme";

type Linha = {
  rotulo: string;
  valor: string;
};

type CartaoInfoProps = {
  linhas: Linha[];
};

export function CartaoInfo({ linhas }: CartaoInfoProps) {
  return (
    <View style={styles.cartao}>
      {linhas.map((linha) => (
        <View key={linha.rotulo} style={styles.linha}>
          <Text style={styles.rotulo}>{linha.rotulo}</Text>
          <Text style={styles.valor}>{linha.valor}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: 12,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  rotulo: {
    fontSize: 16,
    color: colors.textMuted,
  },
  valor: {
    flexShrink: 1,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
});