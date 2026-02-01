// "use client";

// import { useCartStore } from "@/store/cart.store";
// import Link from "next/link";

// export default function CartPage() {
//   const items = useCartStore((s) => Object.values(s.items));
//   const totalPrice = useCartStore((s) => s.totalPrice());
//   const add = useCartStore((s) => s.add);
//   const removeOne = useCartStore((s) => s.removeOne);
//   const removeAll = useCartStore((s) => s.removeAll);
//   const clear = useCartStore((s) => s.clear);

//   if (items.length === 0) {
//     return (
//       <p className="p-6 text-center text-neutral-500">
//         Votre panier est vide
//       </p>
//     );
//   }

//   return (
//     <div className="p-6 space-y-6 pb-24">
//       <h1 className="text-xl font-semibold">Votre panier</h1>

//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="flex justify-between items-center border-b pb-3"
//         >
//           <div>
//             <p className="font-medium">{item.name}</p>
//             <p className="text-sm text-neutral-500">
//               {item.price} €
//             </p>

//             <div className="flex items-center gap-3 mt-2">
//               <button
//                 onClick={() => removeOne(item.id)}
//                 className="w-8 h-8 border rounded-full"
//               >
//                 −
//               </button>

//               <span>{item.quantity}</span>

//               <button
//                 onClick={() =>
//                   add({
//                     id: item.id,
//                     name: item.name,
//                     price: item.price,
//                   })
//                 }
//                 className="w-8 h-8 border rounded-full"
//               >
//                 +
//               </button>

//               <button
//                 onClick={() => removeAll(item.id)}
//                 className="ml-3 text-xs text-red-500"
//               >
//                 Supprimer
//               </button>
//             </div>
//           </div>

//           <p className="font-medium">
//             {(item.quantity * item.price).toFixed(2)} €
//           </p>
//         </div>
//       ))}

//       <div className="border-t pt-4 flex justify-between font-bold">
//         <span>Total</span>
//         <span>{totalPrice().toFixed(2)} €</span>
//       </div>

//       <button
//         onClick={clear}
//         className="text-sm text-red-500 underline"
//       >
//         Vider le panier
//       </button>

//       <Link
//         href="/order/confirm"
//         className="block text-center bg-black text-white py-4 rounded-xl"
//       >
//         Confirmer la commande
//       </Link>
//     </div>
//   );
// }






"use client";

import { useCartStore } from "@/store/cart.store";
import Link from "next/link";

export default function CartPage() {
  // ✅ select RAW state only
  const itemsMap = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
   const add = useCartStore((s) => s.add);
    const removeOne = useCartStore((s) => s.removeOne);
  const removeAll = useCartStore((s) => s.removeAll);

  // ✅ derive locally (stable)
  const items = Object.values(itemsMap);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-neutral-500">
        Votre panier est vide
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 pb-24">

         {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b pb-3"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-neutral-500">
              {item.price} €
            </p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => removeOne(item.id)}
                className="w-8 h-8 border rounded-full"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  add({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                  })
                }
                className="w-8 h-8 border rounded-full"
              >
                +
              </button>

              <button
                onClick={() => removeAll(item.id)}
                className="ml-3 text-xs text-red-500"
              >
                Supprimer
              </button>
            </div>
          </div>

          <p className="font-medium">
            {(item.quantity * item.price).toFixed(2)} €
          </p>
        </div>
      ))}

      {items.map((item) => (
        <div key={item.id} className="flex justify-between">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-neutral-500">
              {item.quantity} × {item.price} €
            </p>
          </div>

          <p className="font-semibold">
            {(item.quantity * item.price).toFixed(2)} €
          </p>
        </div>
      ))}

      <div className="border-t pt-4 flex justify-between font-bold">
        <span>Total</span>
        <span>{totalPrice.toFixed(2)} €</span>
      </div>

          <button
        onClick={clear}
        className="text-sm text-red-500 underline"
      >
        Vider le panier
      </button>

      <Link
        href="/order/confirm"
        className="block text-center bg-black text-white py-4 rounded-xl"
      >
        Confirmer la commande
      </Link>
    </div>
  );
}




// "use client";

// import { useCartStore } from "@/store/cart.store";
// import Link from "next/link";

// export default function CartPage() {
//   const items = useCartStore((s) => s.itemsArray());
//   const totalPrice = useCartStore((s) => s.totalPrice());

//   if (items.length === 0) {
//     return <p className="p-6 text-center">Votre panier est vide</p>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {items.map((item) => (
//         <div key={item.id} className="flex justify-between">
//           <div>
//             <p>{item.name}</p>
//             <p className="text-sm text-neutral-500">
//               {item.quantity} × {item.price} €
//             </p>
//           </div>

//           <p className="font-medium">
//             {item.quantity * item.price} €
//           </p>
//         </div>
//       ))}

//       <div className="border-t pt-4 flex justify-between font-bold">
//         <span>Total</span>
//         <span>{totalPrice} €</span>
//       </div>

//       <Link
//         href="/order/confirm"
//         className="block text-center bg-black text-white py-4 rounded-xl"
//       >
//         Confirmer la commande
//       </Link>
//     </div>
//   );
// }


// "use client";

// import { useCartStore } from "@/store/cart.store";
// import Link from "next/link";

// export default function CartPage() {
//   const items = useCartStore((s) => Object.values(s.items));
//   const totalPrice = useCartStore((s) => s.totalPrice());

//   if (items.length === 0) {
//     return <p className="p-6 text-center">Votre panier est vide</p>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       {items.map((item) => (
//         <div key={item.id} className="flex justify-between">
//           <div>
//             <p>{item.name}</p>
//             <p className="text-sm text-neutral-500">
//               {item.quantity} × {item.price} €
//             </p>
//           </div>

//           <p className="font-medium">
//             {item.quantity * item.price} €
//           </p>
//         </div>
//       ))}

//       <div className="border-t pt-4 flex justify-between font-bold">
//         <span>Total</span>
//         <span>{totalPrice} €</span>
//       </div>

//       <Link
//         href="/order/confirm"
//         className="block text-center bg-black text-white py-4 rounded-xl"
//       >
//         Confirmer la commande
//       </Link>
//     </div>
//   );
// }
