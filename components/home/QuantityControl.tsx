"use client";

import { useCartStore } from "@/store/cart.store";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function QuantityControl({ product }: Props) {
  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);
  const quantity = useCartStore((s) => s.getQuantity(product.id));

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => remove(product.id)}
        disabled={quantity === 0}
        className="w-8 h-8 rounded bg-gray-200 disabled:opacity-40"
      >
        -
      </button>

      <span className="w-6 text-center font-medium">
        {quantity}
      </span>

      <button
        onClick={() => add(product)}
        className="w-8 h-8 rounded bg-black text-white"
      >
        +
      </button>
    </div>
  );
}
