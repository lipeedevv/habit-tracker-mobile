import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CampoTexto } from "../Components/CampoTexto";
import { Chip } from "../Components/Chip";
import { SecaoFormulario } from "../Components/SecaoFormulario";
import { SeletorDias } from "../Components/SeletorDias";
import { CATEGORIAS, TODOS_OS_DIAS } from "../constants";
import { colors, spacing } from "../theme";
import { Categoria, DadosHabito, Frequencia, Habito } from "../types";
import { Header } from "../Components/Header";
import { Botao } from "../Components/Botao";

type NovoHabitoScreenProps = {
  habitoInicial?: Habito | null;
  onSalvar: (dados: DadosHabito) => void;
  onVoltar: () => void;
};

export function NovoHabitoScreen({ habitoInicial, onSalvar, onVoltar }: NovoHabitoScreenProps) {
  const editando = Boolean(habitoInicial);

  const [titulo, setTitulo] = useState(habitoInicial?.titulo ?? "");
  const [categoria, setCategoria] = useState<Categoria>(habitoInicial?.categoria ?? "Saúde");
  const [frequencia, setFrequencia] = useState<Frequencia>(habitoInicial?.frequencia ?? "diario");
  const [dias, setDias] = useState<number[]>(habitoInicial?.diasSemana ?? TODOS_OS_DIAS);
  const [erro, setErro] = useState("");

  function alterarTitulo(texto: string) {
    setTitulo(texto);
    setErro("");
  }

  function alternarDia(indice: number) {
    setDias((atual) =>
      atual.includes(indice)
        ? atual.filter((dia) => dia !== indice)
        : [...atual, indice].sort((a, b) => a - b)
    );
  }

  function salvar() {
    const tituloLimpo = titulo.trim();

    if (tituloLimpo === "") {
      setErro("Informe um título para o hábito.");
      return;
    }

    if (frequencia === "semana" && dias.length === 0) {
      setErro("Selecione pelo menos um dia da semana.");
      return;
    }

    onSalvar({
      titulo: tituloLimpo,
      categoria,
      frequencia,
      diasSemana: frequencia === "diario" ? TODOS_OS_DIAS : dias,
    });
  }

  return (
    <View style={styles.tela}>
      <Header titulo={editando ? "Editar hábito" : "Novo hábito"} onVoltar={onVoltar} />

      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <CampoTexto
          rotulo="Título"
          obrigatorio
          placeholder="Ex.: Beber 2L de água"
          value={titulo}
          onChangeText={alterarTitulo}
        />

        <SecaoFormulario titulo="Categoria">
          <View style={styles.chips}>
            {CATEGORIAS.map((item) => (
              <Chip
                key={item}
                texto={item}
                selecionado={categoria === item}
                onPress={() => setCategoria(item)}
              />
            ))}
          </View>
        </SecaoFormulario>

        <SecaoFormulario titulo="Frequência">
          <View style={styles.chips}>
            <Chip
              grande
              texto="Diário"
              selecionado={frequencia === "diario"}
              onPress={() => setFrequencia("diario")}
              style={styles.metade}
            />
            <Chip
              grande
              texto="Dias da semana"
              selecionado={frequencia === "semana"}
              onPress={() => setFrequencia("semana")}
              style={styles.metade}
            />
          </View>
        </SecaoFormulario>

        {frequencia === "semana" && <SeletorDias selecionados={dias} onAlternar={alternarDia} />}

        {erro !== "" && <Text style={styles.erro}>{erro}</Text>}

        <Botao texto={editando ? "Salvar alterações" : "Salvar hábito"} onPress={salvar} />
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
    gap: 20,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  metade: {
    flex: 1,
  },
  erro: {
    fontSize: 14,
    color: colors.danger,
  },
});