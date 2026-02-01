"use client";

import { useCartStore } from "@/store/cart.store";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);
  const items = useCartStore((s) => s.items);

  const quantity = items[product.id]?.quantity ?? 0;

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-sm text-neutral-500">{product.price} €</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={quantity === 0}
          onClick={() => remove(product.id)}
          className="w-8 h-8 rounded-full border disabled:opacity-30"
        >
          −
        </button>

        <span className="w-4 text-center">{quantity}</span>

        <button
          onClick={() =>
            add({
              id: product.id,
              name: product.name,
              price: product.price,
            })
          }
          className="w-8 h-8 rounded-full bg-black text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}


// // src/components/home/ProductCard.tsx
// "use client";

// import { useCartStore } from "@/store/cart.store";
// import { Product } from "@/types/product";

// export default function ProductCard({ product }: { product: Product }) {
//   const add = useCartStore((s) => s.add);
//   const remove = useCartStore((s) => s.remove);
//   const quantity = useCartStore((s) => s.getQuantity(product.id));

//   return (
//     <div className="flex justify-between items-center py-4 border-b">
//       <div>
//         <p className="font-medium">{product.name}</p>
//         <p className="text-sm text-neutral-500">{product.price} €</p>
//       </div>

//       <div className="flex items-center gap-3">
//         <button
//           disabled={quantity === 0}
//           onClick={() => remove(product.id)}
//           className="w-8 h-8 rounded-full border disabled:opacity-30"
//         >
//           −
//         </button>

//         <span className="w-4 text-center">{quantity}</span>

//         <button
//           onClick={() =>
//             add({
//               id: product.id,
//               name: product.name,
//               price: product.price,
//             })
//           }
//           className="w-8 h-8 rounded-full bg-black text-white"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }



// // src/components/home/ProductCard.tsx
// import { Product } from '@/types/product'
// import { useCartStore } from '@/store/cart.store'

// export default function ProductCard({ product }: { product: Product }) {
//   const { items, add, remove } = useCartStore()
//   const item = items.find(i => i.id === product.id)

//   return (
//     <div className="flex justify-between items-center border-b py-4">
//       <div>
//         <p className="font-medium">{product.name}</p>
//         <p className="text-sm text-neutral-500">{product.price} €</p>
//       </div>

//       <div className="flex items-center gap-3">
//         <button
//           onClick={() => remove(product.id)}
//           disabled={!item}
//           className="w-8 h-8 rounded-full border disabled:opacity-30"
//         >
//           −
//         </button>

//         <span>{item?.quantity ?? 0}</span>

//         <button
//           onClick={() => add(product)}
//           className="w-8 h-8 rounded-full bg-black text-white"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   )
// }



// import QuantityControl from "./QuantityControl";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
// };

// export default function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="border rounded-xl p-4 flex justify-between items-center">
//       <div>
//         <h3 className="font-semibold">{product.name}</h3>
//         <p className="text-gray-600">{product.price} FCFA</p>
//       </div>

//       <QuantityControl product={product} />
//     </div>
//   );
// }
