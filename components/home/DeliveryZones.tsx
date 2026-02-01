// src/components/home/DeliveryZones.tsx
import { DeliveryZone } from '@/types/delivery'

export default function DeliveryZones({ zones }: { zones: DeliveryZone[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {zones.map(zone => (
        <div
          key={zone.id}
          className="min-w-[220px] rounded-xl bg-neutral-100 p-4"
        >
          <p className="font-semibold">{zone.name}</p>
          <p className="text-sm text-neutral-600">
            {zone.frequency === 'weekly'
              ? 'Livraison chaque semaine'
              : 'Livraison mensuelle'}
          </p>
          <p className="mt-2 font-bold">{zone.delivery_amount} €</p>
        </div>
      ))}
    </div>
  )
}
