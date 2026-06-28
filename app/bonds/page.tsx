import { RiskProfileCard } from "@/components/RiskProfileCard"
import { products } from "@/lib/financial-data"

export default function BondsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Bonds</h1>
        <p className="text-muted-foreground">{products.bonds.description}</p>
      </div>
      <RiskProfileCard product={products.bonds} />
    </div>
  )
}
