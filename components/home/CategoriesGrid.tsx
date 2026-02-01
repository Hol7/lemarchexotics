import Image from 'next/image'
import Link from 'next/link'

type Category = {
  id: string
  name: string
  image: string | null
}

export default function CategoriesGrid({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <section className="px-4">
      <h2 className="mb-4 text-lg font-semibold">
        Catégories
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {categories.map(cat => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden">
              <Image
                src={cat.image ?? '/placeholder.png'}
                alt={cat.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <span className="text-sm text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";

// type Category = {
//   id: string;
//   name: string;
//   image: string;
// };

// export default function CategoriesGrid({
//   categories,
// }: {
//   categories: Category[];
// }) {
//   return (
//     <section>
//       <h2 className="text-lg font-semibold mb-4">
//         Nos catégories
//       </h2>

//       <div className="grid grid-cols-3 gap-4">
//         {categories.map((cat) => (
//           <Link
//             key={cat.id}
//             href={`/category/${cat.id}`}
//             className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition"
//           >
//             <Image
//               src={cat.image}
//               alt={cat.name}
//               width={64}
//               height={64}
//               className="rounded-full mb-2"
//             />
//             <p className="text-sm font-medium truncate w-full">
//               {cat.name}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
