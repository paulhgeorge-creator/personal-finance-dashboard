import { RiskProfileCard } from "@/components/RiskProfileCard"
import { products } from "@/lib/financial-data"

export default function IndexFundsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Index Funds</h1>
        <p className="text-muted-foreground">{products["index-funds"].description}</p>
      </div>
      <RiskProfileCard product={products["index-funds"]} />
    </div>
  )
}
