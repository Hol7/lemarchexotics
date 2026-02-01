import { DeliveryZone } from '@/types/delivery'

export default function DeliveryInfo({ zones }: { zones: DeliveryZone[] }) {
  return (
    <section className="px-4">
      <h2 className="mb-3 text-lg font-semibold">
        🚚 Livraison
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {zones.map(zone => (
          <div
            key={zone.id}
            className="min-w-[220px] rounded-xl bg-white p-4 shadow-sm border"
          >
            <p className="font-medium">{zone.name}</p>

            <p className="text-sm text-gray-500 mt-1">
              {zone.frequency === 'weekly'
                ? 'Livraison chaque semaine'
                : 'Livraison mensuelle'}
            </p>

            <p className="mt-2 font-semibold">
              {zone.delivery_amount} €
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}


// "use client";

// import { Icon } from "@iconify/react";

// type Zone = {
//   id: string;
//   name: string;
//   frequency: string;
//   delivery_amount: number;
// };

// export default function DeliveryInfo({ zones }: { zones: Zone[] }) {
//   return (
//     <section className="mb-6">
//       <h2 className="text-lg font-semibold mb-3">
//         🚚 Informations de livraison
//       </h2>

//       <div className="flex gap-4 overflow-x-auto no-scrollbar">
//         {zones.map((zone) => (
//           <div
//             key={zone.id}
//             className="min-w-[220px] bg-soft rounded-2xl p-4 shadow-sm"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <Icon icon="mdi:map-marker-outline" width={18} />
//               <p className="font-medium">{zone.name}</p>
//             </div>

//             <p className="text-sm text-muted mb-1">
//               {zone.frequency === "weekly"
//                 ? "Livraison chaque semaine"
//                 : "Livraison mensuelle"}
//             </p>

//             <p className="text-sm font-semibold">
//               Frais : {zone.delivery_amount} €
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";

// type Zone = {
//   id: string;
//   name: string;
//   frequency: string;
//   delivery_amount: number;
//   description: string | null;
// };

// export default function DeliveryInfo() {
//   const [zones, setZones] = useState<Zone[]>([]);

//   useEffect(() => {
//     supabase
//       .from("delivery_zones")
//       .select("*")
//       .eq("active", true)
//       .then(({ data }) => setZones(data || []));
//   }, []);

//   return (
//     <section className="mb-6">
//       <h2 className="text-lg font-semibold mb-3">🚚 Livraison</h2>

//       <div className="flex gap-4 overflow-x-auto pb-2">
//         {zones.map((zone) => (
//           <div
//             key={zone.id}
//             className="min-w-[220px] rounded-2xl border p-4 bg-gray-50"
//           >
//             <p className="font-semibold">{zone.name}</p>
//             <p className="text-sm text-gray-600">
//               {zone.frequency === "weekly"
//                 ? "Chaque semaine (Ven–Dim)"
//                 : "Une fois par mois"}
//             </p>
//             <p className="mt-2 font-medium">
//               Frais : {zone.delivery_amount} €
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
