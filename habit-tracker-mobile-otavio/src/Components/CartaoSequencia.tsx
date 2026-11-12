import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../theme";

type CartaoSequenciaProps = {
  sequencia: number;
  totalConclusoes: number;
};

export function CartaoSequencia({ sequencia, totalConclusoes }: CartaoSequenciaProps) {
  const palavra = totalConclusoes === 1 ? "conclusão" : "conclusões";

  return (
    <View style={styles.cartao}>
      <Text style={styles.rotulo}>Dias seguidos</Text>
      <Text style={styles.numero}>{sequencia}</Text>
      <Text style={styles.rotulo}>
        {totalConclusoes} {palavra} no total
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: colors.primaryDark,
    borderRadius: radius.xl,
    padding: spacing.lg + 4,
    gap: 4,
  },
  rotulo: {
    fontSize: 16,
    color: colors.textOnDarkMuted,
  },
  numero: {
    fontSize: 56,
    fontWeight: "800",
    color: colors.textOnDark,
  },
});