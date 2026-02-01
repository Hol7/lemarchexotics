// src/components/home/ProductsSection.tsx
import ProductCard from './ProductCard'

export default function ProductsSection({ products, categories }: any) {
  return (
    <div className="space-y-8">
      {categories.map((cat: any) => (
        <div key={cat.id}>
          <h2 className="text-lg font-semibold mb-2">{cat.name}</h2>

          {products
            .filter((p: any) => p.category_id === cat.id)
            .map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}

          {products.filter((p: any) => p.category_id === cat.id).length === 0 && (
            <p className="text-sm text-neutral-400">Pas de produit</p>
          )}
        </div>
      ))}
    </div>
  )
}
