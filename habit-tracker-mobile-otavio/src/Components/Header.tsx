import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

type HeaderProps = {
  titulo: string;
  onVoltar: () => void;
};

export function Header({ titulo, onVoltar }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onVoltar} hitSlop={8}>
        <Text style={styles.voltar}>← Voltar</Text>
      </Pressable>
      <Text style={styles.titulo} numberOfLines={1}>
        {titulo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  voltar: {
    fontSize: 16,
    color: colors.textMuted,
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
});