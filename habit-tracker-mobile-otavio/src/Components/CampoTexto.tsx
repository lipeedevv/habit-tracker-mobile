import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors, radius, spacing } from "../theme";
import { SecaoFormulario } from "./SecaoFormulario";

type CampoTextoProps = TextInputProps & {
  rotulo: string;
  obrigatorio?: boolean;
};

export function CampoTexto({ rotulo, obrigatorio, style, ...resto }: CampoTextoProps) {
  return (
    <SecaoFormulario titulo={rotulo} obrigatorio={obrigatorio}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.placeholder}
        {...resto}
      />
    </SecaoFormulario>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
});