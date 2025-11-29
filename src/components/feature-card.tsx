import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  footnote?: string
}

export function FeatureCard({ icon: Icon, title, description, footnote }: FeatureCardProps) {
  return (
    <Card className="rounded-2xl border-none bg-white/90 shadow-sm ring-1 ring-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="space-y-3 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lifely-indigo/10 text-lifely-indigo">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-lifely-dark">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
          {footnote && <p className="text-xs text-slate-500">{footnote}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
