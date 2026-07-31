"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PROBLEMS } from "@/lib/constants"
import { AlertTriangle } from "lucide-react"

export function Problems() {
  return (
    <section id="problemas" className="py-24 bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            A realidade de quem organiza eventos
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Se você já ficou no prejuízo porque um promoter não prestou contas, ou passou a noite inteira na portaria resolvendo lista, você sabe como é.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, index) => (
            <Card key={index} className="bg-slate-900/40 border-red-500/20 hover:border-red-500/50 transition-colors duration-300">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">
                    {problem.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
