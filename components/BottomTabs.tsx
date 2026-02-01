"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cart.store";

const tabs = [
  { href: "/", label: "Accueil", icon: "mdi:home-outline" },
  { href: "/cart", label: "Panier", icon: "mdi:cart-outline" },
  { href: "/order", label: "Commandes", icon: "mdi:package-variant" },
];

export default function BottomTabs() {
  const pathname = usePathname();

  // ✅ subscribe ONLY to state
  const items = useCartStore((s) => s.items);

  // ✅ compute locally (stable)
  const totalItems = Object.values(items).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around py-3">
      {tabs.map((tab) => {
        const active =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative flex flex-col items-center text-xs ${
              active ? "text-black font-semibold" : "text-neutral-400"
            }`}
          >
            <Icon icon={tab.icon} width={22} />

            {tab.href === "/cart" && totalItems > 0 && (
              <span className="absolute -top-1 right-3 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}

            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}



// "use client";

// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { usePathname } from "next/navigation";
// import { useCartStore } from "@/store/cart.store";

// const tabs = [
//   { href: "/", label: "Accueil", icon: "mdi:home-outline" },
//   { href: "/cart", label: "Panier", icon: "mdi:cart-outline" },
//   { href: "/orders", label: "Commandes", icon: "mdi:package-variant" },
// ];

// export default function BottomTabs() {
//   const pathname = usePathname();
//   const totalItems = useCartStore((s) => s.totalItems());

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around py-3">
//       {tabs.map((tab) => {
//         const active =
//           tab.href === "/"
//             ? pathname === "/"
//             : pathname.startsWith(tab.href);

//         return (
//           <Link
//             key={tab.href}
//             href={tab.href}
//             className={`relative flex flex-col items-center text-xs ${
//               active ? "text-black font-semibold" : "text-neutral-400"
//             }`}
//           >
//             <Icon icon={tab.icon} width={22} />

//             {tab.href === "/cart" && totalItems > 0 && (
//               <span className="absolute -top-1 right-3 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}

//             {tab.label}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { usePathname } from "next/navigation";

// const tabs = [
//   { href: "/home", label: "Accueil", icon: "mdi:home-outline" },
//   { href: "/cart", label: "Panier", icon: "mdi:cart-outline" },
//   { href: "/orders", label: "Commandes", icon: "mdi:package-variant" },
// ];

// export default function BottomTabs() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
//       {tabs.map((tab) => {
//         const active = pathname.startsWith(tab.href);
//         return (
//           <Link
//             key={tab.href}
//             href={tab.href}
//             className={`flex flex-col items-center text-xs ${
//               active ? "text-primary font-semibold" : "text-muted"
//             }`}
//           >
//             <Icon icon={tab.icon} width={22} />
//             {tab.label}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }


// // "use client";

// // import Link from "next/link";
// // import { Home, ShoppingCart, Package } from "lucide-react";
// // import { usePathname } from "next/navigation";

// // const tabs = [
// //   { href: "/home", label: "Accueil", icon: Home },
// //   { href: "/cart", label: "Panier", icon: ShoppingCart },
// //   { href: "/orders", label: "Commandes", icon: Package },
// // ];

// // export default function BottomTabs() {
// //   const pathname = usePathname();

// //   return (
// //     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
// //       {tabs.map(({ href, label, icon: Icon }) => {
// //         const active = pathname.startsWith(href);
// //         return (
// //           <Link
// //             key={href}
// //             href={href}
// //             className={`flex flex-col items-center text-xs ${
// //               active ? "text-black font-semibold" : "text-gray-400"
// //             }`}
// //           >
// //             <Icon size={22} />
// //             {label}
// //           </Link>
// //         );
// //       })}
// //     </nav>
// //   );
// // }
