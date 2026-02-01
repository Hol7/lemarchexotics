"use client";

import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;

  add: (product: Omit<CartItem, "quantity">) => void;
  removeOne: (productId: string) => void;
  removeAll: (productId: string) => void;
  clear: () => void;

  getQuantity: (productId: string) => number;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: {},

  add: (product) =>
    set((state) => {
      const existing = state.items[product.id];

      return {
        items: {
          ...state.items,
          [product.id]: {
            ...product,
            quantity: existing ? existing.quantity + 1 : 1,
          },
        },
      };
    }),

  removeOne: (productId) =>
    set((state) => {
      const item = state.items[productId];
      if (!item) return state;

      if (item.quantity === 1) {
        const { [productId]: _, ...rest } = state.items;
        return { items: rest };
      }

      return {
        items: {
          ...state.items,
          [productId]: {
            ...item,
            quantity: item.quantity - 1,
          },
        },
      };
    }),

  removeAll: (productId) =>
    set((state) => {
      const { [productId]: _, ...rest } = state.items;
      return { items: rest };
    }),

  clear: () => set({ items: {} }),

  getQuantity: (productId) =>
    get().items[productId]?.quantity ?? 0,

  totalItems: () =>
    Object.values(get().items).reduce(
      (acc, item) => acc + item.quantity,
      0
    ),

  totalPrice: () =>
    Object.values(get().items).reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    ),
}));



// // src/store/cart.store.ts
// "use client";

// import { create } from "zustand";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type CartState = {
//   items: Record<string, CartItem>;

//   add: (product: Omit<CartItem, "quantity">) => void;
//   remove: (productId: string) => void;

//   getQuantity: (productId: string) => number;

//   itemsArray: () => CartItem[];
//   totalItems: () => number;
//   totalPrice: () => number;
// };

// export const useCartStore = create<CartState>((set, get) => ({
//   items: {},

//   add: (product) =>
//     set((state) => {
//       const existing = state.items[product.id];

//       return {
//         items: {
//           ...state.items,
//           [product.id]: {
//             ...product,
//             quantity: existing ? existing.quantity + 1 : 1,
//           },
//         },
//       };
//     }),

//   remove: (productId) =>
//     set((state) => {
//       const item = state.items[productId];
//       if (!item) return state;

//       if (item.quantity === 1) {
//         const { [productId]: _, ...rest } = state.items;
//         return { items: rest };
//       }

//       return {
//         items: {
//           ...state.items,
//           [productId]: {
//             ...item,
//             quantity: item.quantity - 1,
//           },
//         },
//       };
//     }),

//   getQuantity: (productId) =>
//     get().items[productId]?.quantity ?? 0,

//   // ✅ STABLE
//   itemsArray: () => Object.values(get().items),

//   totalItems: () =>
//     Object.values(get().items).reduce(
//       (acc, item) => acc + item.quantity,
//       0
//     ),

//   totalPrice: () =>
//     Object.values(get().items).reduce(
//       (acc, item) => acc + item.quantity * item.price,
//       0
//     ),
// }));



// // src/store/cart.store.ts
// "use client";

// import { create } from "zustand";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type CartState = {
//   items: Record<string, CartItem>;
//   add: (product: Omit<CartItem, "quantity">) => void;
//   remove: (productId: string) => void;
//   getQuantity: (productId: string) => number;
//   totalItems: () => number;
//   totalPrice: () => number;
// };

// export const useCartStore = create<CartState>((set, get) => ({
//   items: {},

//   add: (product) =>
//     set((state) => {
//       const existing = state.items[product.id];

//       return {
//         items: {
//           ...state.items,
//           [product.id]: {
//             ...product,
//             quantity: existing ? existing.quantity + 1 : 1,
//           },
//         },
//       };
//     }),

//   remove: (productId) =>
//     set((state) => {
//       const item = state.items[productId];
//       if (!item) return state;

//       if (item.quantity === 1) {
//         const { [productId]: _, ...rest } = state.items;
//         return { items: rest };
//       }

//       return {
//         items: {
//           ...state.items,
//           [productId]: {
//             ...item,
//             quantity: item.quantity - 1,
//           },
//         },
//       };
//     }),

//   getQuantity: (productId) =>
//     get().items[productId]?.quantity ?? 0,

//   totalItems: () =>
//     Object.values(get().items).reduce(
//       (acc, item) => acc + item.quantity,
//       0
//     ),

//   totalPrice: () =>
//     Object.values(get().items).reduce(
//       (acc, item) => acc + item.quantity * item.price,
//       0
//     ),
// }));


// // // src/store/cart.store.ts
// // import { create } from 'zustand'
// // import { Product } from '@/types/product'

// // type CartItem = Product & { quantity: number }

// // type CartState = {
// //   items: CartItem[]
// //   add: (product: Product) => void
// //   remove: (id: string) => void
// // }

// // export const useCartStore = create<CartState>((set) => ({
// //   items: [],

// //   add: (product) =>
// //     set((state) => {
// //       const found = state.items.find(i => i.id === product.id)
// //       if (found) {
// //         return {
// //           items: state.items.map(i =>
// //             i.id === product.id
// //               ? { ...i, quantity: i.quantity + 1 }
// //               : i
// //           )
// //         }
// //       }
// //       return { items: [...state.items, { ...product, quantity: 1 }] }
// //     }),

// //   remove: (id) =>
// //     set((state) => ({
// //       items: state.items
// //         .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
// //         .filter(i => i.quantity > 0)
// //     })),
// // }))


// // import { create } from "zustand";

// // export type CartItem = {
// //   id: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// // };

// // type CartState = {
// //   items: Record<string, CartItem>;
// //   add: (product: Omit<CartItem, "quantity">) => void;
// //   remove: (productId: string) => void;
// //   getQuantity: (productId: string) => number;
// //   totalItems: () => number;
// // };

// // export const useCartStore = create<CartState>((set, get) => ({
// //   items: {},

// //   add: (product) =>
// //     set((state) => {
// //       const existing = state.items[product.id];

// //       return {
// //         items: {
// //           ...state.items,
// //           [product.id]: {
// //             ...product,
// //             quantity: existing ? existing.quantity + 1 : 1,
// //           },
// //         },
// //       };
// //     }),

// //   remove: (productId) =>
// //     set((state) => {
// //       const item = state.items[productId];
// //       if (!item) return state;

// //       if (item.quantity === 1) {
// //         const { [productId]: _, ...rest } = state.items;
// //         return { items: rest };
// //       }

// //       return {
// //         items: {
// //           ...state.items,
// //           [productId]: {
// //             ...item,
// //             quantity: item.quantity - 1,
// //           },
// //         },
// //       };
// //     }),

// //   getQuantity: (productId) =>
// //     get().items[productId]?.quantity ?? 0,

// //   totalItems: () =>
// //     Object.values(get().items).reduce(
// //       (acc, item) => acc + item.quantity,
// //       0
// //     ),
// // }));
