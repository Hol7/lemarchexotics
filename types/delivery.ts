export type DeliveryZone = {
  id: string
  name: string
  frequency: 'weekly' | 'monthly'
  delivery_amount: number
  description?: string | null
}
