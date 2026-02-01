"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart.store";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type DeliveryZone = {
  id: string;
  name: string;
  delivery_amount: number;
};

export default function OrderConfirmPage() {
  const router = useRouter();

  const itemsMap = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);

  const items = Object.values(itemsMap);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [zones, setZones] = useState<DeliveryZone[]>([]);
  const [zoneId, setZoneId] = useState("");
  const [delivery_address, setdelivery_address] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedZone = zones.find((z) => z.id === zoneId);
  const deliveryAmount = selectedZone?.delivery_amount ?? 0;
  const total = subtotal + deliveryAmount;

  // 🔹 Load delivery zones
  useEffect(() => {
    const loadZones = async () => {
      const { data, error } = await supabase
        .from("delivery_zones")
        .select("*")
        .order("delivery_amount");

      if (!error && data) setZones(data);
    };

    loadZones();
  }, []);

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-neutral-500">
        Votre panier est vide
      </div>
    );
  }

  const handleConfirm = async () => {
    if (!zoneId || !delivery_address || !phone) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("orders").insert({
      items,
      subtotal,
      delivery_amount: deliveryAmount,
      total,
      delivery_zone_id: zoneId,
      delivery_address,
      phone,
      status: "pending",
    });

    setLoading(false);

    if (error) {
      alert("Erreur lors de la commande");
      return;
    }

    clearCart();
    router.push("/orders");
  };

  return (
    <div className="p-6 space-y-6 pb-24">
      <h1 className="text-xl font-semibold">Confirmation de commande</h1>

      {/* 🛒 Récap produits */}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.quantity} × {item.name}
            </span>
            <span>
              {(item.quantity * item.price).toFixed(2)} €
            </span>
          </div>
        ))}
      </div>

      {/* 🚚 Livraison */}
      <div className="space-y-3">
        <label className="block text-sm font-medium">
          Zone de livraison
        </label>
        <select
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Sélectionner une zone</option>
          {zones.map((zone) => (
            <option key={zone.id} value={zone.id}>
              {zone.name} — {zone.delivery_amount} €
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Adresse de livraison"
          value={delivery_address}
          onChange={(e) => setdelivery_address(e.target.value)}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="tel"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* 💰 Totaux */}
      <div className="border-t pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Sous-total</span>
          <span>{subtotal.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between">
          <span>Livraison</span>
          <span>{deliveryAmount.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span>Total</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div>

      {/* ✅ Confirmer */}
      <button
        onClick={handleConfirm}
        disabled={loading}
        className="w-full bg-black text-white py-4 rounded-xl disabled:opacity-50"
      >
        {loading ? "Commande en cours..." : "Confirmer la commande"}
      </button>
    </div>
  );
}
