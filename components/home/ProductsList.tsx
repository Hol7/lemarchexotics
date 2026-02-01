"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <div>
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-muted flex items-center gap-1">
              <Icon icon="mdi:cash" width={16} />
              {product.price} €
            </p>
          </div>

          <Icon icon="mdi:chevron-right" width={22} />
        </Link>
      ))}
    </div>
  );
}
