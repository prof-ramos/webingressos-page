import { z } from "zod"

import { audienceRanges, eventTypes } from "@/lib/lead-options"

const optionalText = (max: number) => z.string().trim().max(max).optional()

export const leadSchema = z.object({
  submissionId: z.string().uuid(),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  whatsapp: z
    .string()
    .trim()
    .min(8)
    .max(30)
    .regex(/^[+\d\s().-]+$/),
  organization: z.string().trim().min(2).max(160),
  university: optionalText(160),
  city: z.string().trim().min(2).max(120),
  eventType: z.enum(eventTypes),
  eventDate: optionalText(40),
  expectedAudience: z.enum(audienceRanges),
  currentPlatform: optionalText(120),
  mainChallenge: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
  website: z.string().max(200).optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
