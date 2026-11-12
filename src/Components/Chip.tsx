import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { colors, radius } from "../theme";

type ChipProps = {
  texto: string;
  selecionado: boolean;
  onPress: () => void;
  grande?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Chip({ texto, selecionado, onPress, grande = false, style }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: selecionado }}
      onPress={onPress}
      style={[
        styles.base,
        grande && styles.grande,
        selecionado && styles.selecionado,
        style,
      ]}
    >
      <Text style={[styles.texto, selecionado && styles.textoSelecionado]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  grande: {
    paddingVertical: 18,
  },
  selecionado: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  texto: {
    fontSize: 16,
    color: colors.textMuted,
  },
  textoSelecionado: {
    color: colors.text,
  },
});