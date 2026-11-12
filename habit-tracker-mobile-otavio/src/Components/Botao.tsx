import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { colors, radius } from "../theme";

type BotaoProps = {
  texto: string;
  onPress: () => void;
  variante?: "primario" | "perigo";
  style?: StyleProp<ViewStyle>;
};

export function Botao({ texto, onPress, variante = "primario", style }: BotaoProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variante],
        pressed && styles.pressionado,
        style,
      ]}
    >
      <Text style={variante === "perigo" ? styles.textoPerigo : styles.textoPrimario}>
        {texto}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 18,
    borderRadius: radius.md,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  primario: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primaryDark,
  },
  perigo: {
    backgroundColor: colors.surface,
    borderColor: colors.danger,
  },
  pressionado: {
    opacity: 0.8,
  },
  textoPrimario: {
    color: colors.textOnDark,
    fontSize: 16,
    fontWeight: "700",
  },
  textoPerigo: {
    color: colors.danger,
    fontSize: 16,
    fontWeight: "700",
  },
});