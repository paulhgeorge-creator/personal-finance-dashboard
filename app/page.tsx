import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products, riskBadgeVariant } from "@/lib/financial-data"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const order = ["savings", "bonds", "index-funds", "crypto"]
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Investment Risk Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Compare risk profiles, volatility, and projected returns across four asset classes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {order.map((id) => {
          const p = products[id]
          return (
            <Link key={id} href={`/${id}`}>
              <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{p.name}</CardTitle>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                  </div>
                  <Badge variant={riskBadgeVariant(p.risk)} className="w-fit">{p.risk}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Avg Return</p>
                      <p className="font-semibold">{p.baseReturn}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Volatility</p>
                      <p className="font-semibold">±{p.volatility}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-xl border bg-muted/30 p-6">
        <p className="text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This dashboard is for educational purposes only and does not constitute financial advice.
          Past performance does not guarantee future results. Always consult a qualified financial professional before investing.
        </p>
      </div>
    </div>
  )
}
