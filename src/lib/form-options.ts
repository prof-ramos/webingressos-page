/**
 * Option lists for the pilot form.
 *
 * Kept free of any import (notably lucide) so the client bundle for
 * `pilot-form.tsx` does not pull in the icon-bearing `constants.ts`.
 */

export const ORGANIZATION_TYPES = [
  "atletica",
  "republica",
  "centro_academico",
  "produtora",
  "outro",
] as const

export const ORGANIZATION_TYPE_LABELS: Record<
  (typeof ORGANIZATION_TYPES)[number],
  string
> = {
  atletica: "Atlética universitária",
  republica: "República estudantil",
  centro_academico: "Centro acadêmico",
  produtora: "Produtora de eventos",
  outro: "Outro",
}

export const ATTENDANCE_RANGES = [
  "ate_300",
  "300_1000",
  "1000_3000",
  "acima_3000",
] as const

export const ATTENDANCE_RANGE_LABELS: Record<
  (typeof ATTENDANCE_RANGES)[number],
  string
> = {
  ate_300: "Até 300 pessoas",
  "300_1000": "300 a 1.000 pessoas",
  "1000_3000": "1.000 a 3.000 pessoas",
  acima_3000: "Acima de 3.000 pessoas",
}

export const UFS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
  "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
  "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const

export const UF_LABELS: Record<(typeof UFS)[number], string> = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
}

export function toOptions<T extends readonly string[]>(
  values: T,
  labels: Record<T[number], string>
): { value: T[number]; label: string }[] {
  return values.map((value) => ({
    value: value as T[number],
    label: labels[value as T[number]],
  }))
}
