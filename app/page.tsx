// src/app/page.tsx
import { supabase } from '@/lib/supabase'
import DeliveryZones from '@/components/home/DeliveryZones'
import CategoriesScroller from '@/components/home/CategoriesScroller'
import ProductsSection from '@/components/home/ProductsSection'

export default async function HomePage() {
  const { data: zones } = await supabase.from('delivery_zones').select('*').eq('active', true)
  const { data: categories } = await supabase.from('categories').select('*')
  const { data: products } = await supabase.from('products').select('*')

  return (
    <main className="p-4 space-y-8">
      <DeliveryZones zones={zones ?? []} />
      <CategoriesScroller categories={categories ?? []} />
      <ProductsSection products={products ?? []} categories={categories ?? []} />
    </main>
  )
}


// import { supabase } from '@/lib/supabase'
// import DeliveryInfo from '@/components/home/DeliveryInfo'
// import CategoriesGrid from '@/components/home/CategoriesGrid'
// import WhatsAppButton from '@/components/home/WhatsAppFloat'
// // import WhatsAppButton from '@/components/home/WhatsAppButton'

// export default async function HomePage() {
//   const { data: zones } = await supabase
//     .from('delivery_zones')
//     .select('*')
//     .eq('active', true)

//   const { data: categories } = await supabase
//     .from('categories')
//     .select('*')

//   return (
//     <>
//       <main className="pb-32 space-y-8">
//         <DeliveryInfo zones={zones ?? []} />
//         <CategoriesGrid categories={categories ?? []} />
//       </main>

//       <WhatsAppButton/>
//     </>
//   )
// }
