export type Categoria = "Saúde" | "Estudos" | "Trabalho" | "Exercícios" | "Outros";

export type Frequencia = "diario" | "semana";

export type Habito = {
  id: string;
  titulo: string;
  categoria: Categoria;
  frequencia: Frequencia;
  diasSemana: number[]; // 0 = domingo ... 6 = sábado
  criadoEm: string; // data em formato ISO
  sequencia: number;
  totalConclusoes: number;
};

// Só os dados que o usuário preenche no formulário
export type DadosHabito = Pick<Habito, "titulo" | "categoria" | "frequencia" | "diasSemana">;