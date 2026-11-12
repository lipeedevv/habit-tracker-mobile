import { Pressable, StyleSheet, Text, View } from "react-native";
import { NOMES_DIAS } from "../constants";
import { colors, radius, spacing } from "../theme";

const ROTULOS = ["D", "S", "T", "Q", "Q", "S", "S"];

type SeletorDiasProps = {
  selecionados: number[];
  onAlternar: (indice: number) => void;
};

export function SeletorDias({ selecionados, onAlternar }: SeletorDiasProps) {
  return (
    <View style={styles.linha}>
      {ROTULOS.map((rotulo, indice) => {
        const ativo = selecionados.includes(indice);

        return (
          <Pressable
            key={indice}
            accessibilityRole="button"
            accessibilityLabel={NOMES_DIAS[indice]}
            accessibilityState={{ selected: ativo }}
            onPress={() => onAlternar(indice)}
            style={[styles.dia, ativo && styles.diaAtivo]}
          >
            <Text style={[styles.texto, ativo && styles.textoAtivo]}>{rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  dia: {
    flex: 1,
    maxWidth: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  diaAtivo: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  texto: {
    fontSize: 16,
    color: colors.textMuted,
  },
  textoAtivo: {
    color: colors.text,
  },
});