import { RiskProfileCard } from "@/components/RiskProfileCard"
import { products } from "@/lib/financial-data"

export default function CryptoPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Cryptocurrency</h1>
        <p className="text-muted-foreground">{products.crypto.description}</p>
      </div>
      <RiskProfileCard product={products.crypto} />
    </div>
  )
}
