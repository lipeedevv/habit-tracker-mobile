import { NOMES_DIAS } from "../constants";
import { Frequencia } from "../types";

export function formatarData(iso: string): string {
  const data = new Date(iso);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  return `${dia}/${mes}/${data.getFullYear()}`;
}

export function descreverFrequencia(frequencia: Frequencia, dias: number[]): string {
  if (frequencia === "diario") return "Diário";
  return dias.map((dia) => NOMES_DIAS[dia]).join(", ");
}