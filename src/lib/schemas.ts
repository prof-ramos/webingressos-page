import { z } from "zod"

export const pilotFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("Informe um e-mail válido"),
  phone: z.string().min(10, "Informe um telefone/WhatsApp válido com DDD"),
  organizationType: z.enum([
    "atletica",
    "republica",
    "centro_academico",
    "produtora",
    "outro",
  ], { message: "Selecione o tipo de organização" }),
  organizationName: z.string().min(2, "Informe o nome da sua organização/evento"),
  expectedAttendance: z.enum([
    "ate_300",
    "300_1000",
    "1000_3000",
    "acima_3000",
  ], { message: "Selecione o público estimado" }),
  cityState: z.string().min(3, "Informe a cidade/UF do evento"),
  acceptsTerms: z.boolean().refine((val) => val === true, "Você precisa aceitar os termos de contato"),
})

export type PilotFormData = z.infer<typeof pilotFormSchema>
