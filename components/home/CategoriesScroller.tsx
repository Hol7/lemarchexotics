"use client";

import Link from "next/link";
import { Category } from "@/types/category";

export default function CategoriesScroller({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="flex gap-3 overflow-x-auto py-3">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/category/${cat.id}`}
          className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap hover:bg-primary hover:text-white transition"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}


// // src/components/home/CategoriesScroller.tsx
// export default function CategoriesScroller({ categories }: any) {
//   return (
//     <div className="flex gap-4 overflow-x-auto">
//       {categories.map((cat: any) => (
//         <div
//           key={cat.id}
//           className="px-4 py-2 rounded-full bg-black text-white text-sm"
//         >
//           {cat.name}
//         </div>
//       ))}
//     </div>
//   )
// }
