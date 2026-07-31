import { z } from "zod"

import { ATTENDANCE_RANGES, ORGANIZATION_TYPES, UFS } from "./form-options"

export const pilotFormSchema = z.object({
  name: z.string().trim().min(2, "Informe o nome do responsável"),
  email: z.email("Informe um e-mail válido"),
  phone: z.string().trim().min(10, "Informe um telefone/WhatsApp válido com DDD"),
  organizationType: z.enum(ORGANIZATION_TYPES, {
    error: "Selecione o tipo de evento",
  }),
  organizationName: z.string().trim().min(2, "Informe o nome da sua organização/evento"),
  expectedAttendance: z.enum(ATTENDANCE_RANGES, {
    error: "Selecione a estimativa de público",
  }),
  cityState: z.enum(UFS, { error: "Selecione o estado do evento" }),
  acceptsTerms: z
    .boolean()
    .refine((val) => val === true, "Você precisa aceitar os termos de contato"),
})

export type PilotFormData = z.infer<typeof pilotFormSchema>
