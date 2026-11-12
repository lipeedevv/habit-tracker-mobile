import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

type SecaoFormularioProps = {
  titulo: string;
  obrigatorio?: boolean;
  children: ReactNode;
};

export function SecaoFormulario({ titulo, obrigatorio = false, children }: SecaoFormularioProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {titulo}
        {obrigatorio ? " *" : ""}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
});