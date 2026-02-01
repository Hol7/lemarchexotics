"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useCartStore } from "@/store/cart.store";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);
  const getQty = useCartStore((s) => s.getQuantity);

  useEffect(() => {
    supabase
      .from("products")
      .select("id, name, price")
      .eq("category_id", id)
      .then(({ data }) => setProducts(data ?? []));
  }, [id]);

  if (products.length === 0) {
    return (
      <div className="p-6 text-center text-neutral-500">
        Aucun produit dans cette catégorie
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      {products.map((product) => {
        const qty = getQty(product.id);

        return (
          <div
            key={product.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-neutral-500">
                {product.price} €
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={qty === 0}
                onClick={() => remove(product.id)}
                className="w-8 h-8 border rounded-full disabled:opacity-30"
              >
                −
              </button>

              <span>{qty}</span>

              <button
                onClick={() =>
                  add({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                  })
                }
                className="w-8 h-8 bg-black text-white rounded-full"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { useCartStore } from "@/store/cart.store";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
// };

// export default function CategoryPage() {
//   const { id } = useParams<{ id: string }>();
//   const [products, setProducts] = useState<Product[]>([]);

//   const add = useCartStore((s) => s.add);
//   const remove = useCartStore((s) => s.remove);
//   const getQty = useCartStore((s) => s.getQuantity);

//   useEffect(() => {
//     supabase
//       .from("products")
//       .select("id, name, price")
//       .eq("category_id", id)
//       .then(({ data }) => setProducts(data ?? []));
//   }, [id]);

//   if (products.length === 0) {
//     return (
//       <div className="p-6 text-center text-neutral-500">
//         Aucun produit dans cette catégorie
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 space-y-4">
//       {products.map((product) => {
//         const qty = getQty(product.id);

//         return (
//           <div
//             key={product.id}
//             className="flex justify-between items-center border-b pb-4"
//           >
//             <div>
//               <p className="font-medium">{product.name}</p>
//               <p className="text-sm text-neutral-500">
//                 {product.price} €
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 disabled={qty === 0}
//                 onClick={() => remove(product.id)}
//                 className="w-8 h-8 border rounded-full disabled:opacity-30"
//               >
//                 −
//               </button>

//               <span>{qty}</span>

//               <button
//                 onClick={() =>
//                   add({
//                     id: product.id,
//                     name: product.name,
//                     price: product.price,
//                   })
//                 }
//                 className="w-8 h-8 bg-black text-white rounded-full"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// import ProductCard from "@/components/home/ProductCard";

// const products = [
//   { id: "1", name: "Café Latte", price: 1500 },
//   { id: "2", name: "Cappuccino", price: 1800 },
//   { id: "3", name: "Espresso", price: 1200 },
// ];

// export default function CategoryPage() {
//   return (
//     <section className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Nos produits</h1>

//       <div className="space-y-3">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }
