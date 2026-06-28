"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { type ProductData, projectedReturn, formatCurrency, riskBadgeVariant } from "@/lib/financial-data"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

interface Props {
  product: ProductData
}

export function RiskProfileCard({ product }: Props) {
  const [years, setYears] = useState(10)
  const initial = 10000

  const chartData = Array.from({ length: years }, (_, i) => ({
    year: i + 1,
    value: Math.round(projectedReturn(product.baseReturn, i + 1, initial)),
  }))

  const finalValue = projectedReturn(product.baseReturn, years, initial)

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Risk Level" value={<Badge variant={riskBadgeVariant(product.risk)}>{product.risk}</Badge>} />
        <StatCard label="Volatility" value={`±${product.volatility}%`} />
        <StatCard label="Avg Annual Return" value={`${product.baseReturn}%`} />
        <StatCard label={`${years}yr Projection`} value={formatCurrency(finalValue)} highlight />
      </div>

      {/* Slider */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Time Horizon: <span className="text-foreground font-bold">{years} years</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            min={1}
            max={30}
            step={1}
            value={[years]}
            onValueChange={(vals) => setYears(Array.isArray(vals) ? vals[0] : vals)}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1yr</span><span>15yr</span><span>30yr</span>
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Projected Growth — $10,000 initial</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} label={{ value: "Years", position: "insideBottom", offset: -2, fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(v) => formatCurrency(Number(v))} labelFormatter={(l) => `Year ${l}`} />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pros / Cons */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-emerald-500">Pros</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              {product.pros.map((p) => <li key={p} className="flex gap-2"><span>✓</span>{p}</li>)}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-red-500">Cons</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              {product.cons.map((c) => <li key={c} className="flex gap-2"><span>✗</span>{c}</li>)}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ label, value, highlight }: { label: string; value: React.ReactNode; highlight?: boolean }) {
  return (
    <Card className={highlight ? "border-primary/50 bg-primary/5" : ""}>
      <CardContent className="pt-4 pb-3">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <div className="text-lg font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
