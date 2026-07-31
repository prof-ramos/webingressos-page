"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { pilotFormSchema, type PilotFormData } from "@/lib/schemas"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function PilotForm() {
  const form = useForm<PilotFormData>({
    resolver: zodResolver(pilotFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organizationType: undefined,
      organizationName: "",
      expectedAttendance: undefined,
      cityState: "",
      acceptsTerms: false,
    },
  })

  async function onSubmit(data: PilotFormData) {
    console.log(data)
    toast.success("Candidatura enviada com sucesso!", {
      description:
        "Em até 48h oura equipe entrará em contato pelo e-mail ou WhatsApp informado.",
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl mx-auto p-6 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-md"
      >
        <h3 className="text-2xl font-bold text-white text-center">
          Candidatar-se ao Piloto
        </h3>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome completo</FormLabel>
              <FormControl>
                <Input placeholder="Nome e sobrenome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@universidade.edu.br" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="(61) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="organizationType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de organização</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="atletica">Atlética Universitária</SelectItem>
                  <SelectItem value="republica">República Estudantil</SelectItem>
                  <SelectItem value="centro_academico">Centro Acadêmico</SelectItem>
                  <SelectItem value="produtora">Produtora de Eventos</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da organização/evento</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Atlética do Cerrado, Festa Junina da República..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expectedAttendance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Público estimado do evento</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ate_300">Até 300 pessoas</SelectItem>
                  <SelectItem value="300_1000">300 a 1.000 pessoas</SelectItem>
                  <SelectItem value="1000_3000">1.000 a 3.000 pessoas</SelectItem>
                  <SelectItem value="acima_3000">Acima de 3.000 pessoas</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cityState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade/UF do evento</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Brasília/DF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptsTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-slate-800/50 border border-slate-700">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-slate-300">
                  Autorizo o contato da equipe WebIngressos via e-mail ou WhatsApp para informações sobre o Programa Piloto.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg font-bold bg-emerald-600 hover:bg-emerald-500"
        >
          Quero participar do piloto
        </Button>
      </form>
    </Form>
  )
}
