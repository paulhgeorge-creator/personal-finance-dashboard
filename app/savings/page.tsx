import { RiskProfileCard } from "@/components/RiskProfileCard"
import { products } from "@/lib/financial-data"

export default function SavingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Savings Account</h1>
        <p className="text-muted-foreground">{products.savings.description}</p>
      </div>
      <RiskProfileCard product={products.savings} />
    </div>
  )
}
