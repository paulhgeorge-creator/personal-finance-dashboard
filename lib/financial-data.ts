export type RiskLevel = "Low" | "Medium" | "High" | "Very High"

export interface ProductData {
  id: string
  name: string
  risk: RiskLevel
  volatility: number
  baseReturn: number
  description: string
  color: string
  pros: string[]
  cons: string[]
}

export const products: Record<string, ProductData> = {
  savings: {
    id: "savings",
    name: "Savings Account",
    risk: "Low",
    volatility: 0.1,
    baseReturn: 4.5,
    description: "FDIC-insured deposit accounts. Capital protected, predictable yield.",
    color: "emerald",
    pros: ["Capital guaranteed", "FDIC insured up to $250k", "Instant liquidity"],
    cons: ["Returns rarely beat inflation", "No growth potential"],
  },
  bonds: {
    id: "bonds",
    name: "Bonds",
    risk: "Medium",
    volatility: 5.2,
    baseReturn: 6.0,
    description: "Government and corporate fixed-income instruments.",
    color: "blue",
    pros: ["Predictable income", "Lower volatility than equities", "Portfolio stabilizer"],
    cons: ["Interest rate risk", "Inflation erodes real returns"],
  },
  "index-funds": {
    id: "index-funds",
    name: "Index Funds",
    risk: "Medium",
    volatility: 15.0,
    baseReturn: 9.5,
    description: "Passive market-tracking funds. Broad diversification, low fees.",
    color: "violet",
    pros: ["Historically strong long-term returns", "Low fees", "Diversification"],
    cons: ["Short-term volatility", "No downside protection"],
  },
  crypto: {
    id: "crypto",
    name: "Cryptocurrency",
    risk: "Very High",
    volatility: 65.0,
    baseReturn: 25.0,
    description: "Digital assets. High reward potential paired with extreme risk.",
    color: "orange",
    pros: ["Asymmetric upside potential", "24/7 liquid markets"],
    cons: ["Extreme volatility", "Regulatory uncertainty", "No intrinsic yield"],
  },
}

export function projectedReturn(baseReturn: number, years: number, initial = 10000): number {
  return initial * Math.pow(1 + baseReturn / 100, years)
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
}

export function riskColor(risk: RiskLevel): string {
  return { Low: "bg-emerald-500", Medium: "bg-blue-500", High: "bg-orange-500", "Very High": "bg-red-500" }[risk]
}

export function riskBadgeVariant(risk: RiskLevel): "default" | "secondary" | "destructive" | "outline" {
  return { Low: "default", Medium: "secondary", High: "outline", "Very High": "destructive" }[risk] as ReturnType<typeof riskBadgeVariant>
}
