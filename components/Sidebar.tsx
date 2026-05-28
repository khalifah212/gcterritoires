"use client";

import Link from "next/link";

import {
  Plane,
  Ticket,
  CalendarDays,
  Clock3,
  MapPinned,
  Tag,
  Award,
  CircleHelp,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const items = [
    {
      icon: Plane,
      label: "Réserver",
      href: "/", // IMPORTANT
    },
    {
      icon: Ticket,
      label: "Gérer",
      href: "/bookings",
    },
    {
      icon: CalendarDays,
      label: "Enregistrement",
      href: "/checkin",
    },
    {
      icon: Clock3,
      label: "Statut du vol",
      href: "/status",
    },
    {
      icon: MapPinned,
      label: "Planification",
      href: "/planning",
    },
    {
      icon: Tag,
      label: "Offres",
      href: "/offers",
    },
    {
      icon: Award,
      label: "Fidélité",
      href: "/loyalty",
    },
    {
      icon: CircleHelp,
      label: "Aide",
      href: "/help",
    },
  ];

  return (

    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-[220px]
      bg-[#223847]
      text-white
      px-6
      py-10
      z-50
      "
    >

      {/* LOGO */}
      <div className="flex flex-col items-center">

        <h1
          className="
          text-4xl
          tracking-[5px]
          font-light
          "
        >
          ETIHAD
        </h1>

        <p
          className="
          text-[10px]
          tracking-[5px]
          mt-2
          text-white/70
          "
        >
          BEYOND BORDERS
        </p>

      </div>

      {/* LINE */}
      <div className="h-px bg-white/10 my-10" />

      {/* MENU */}
      <nav className="flex flex-col gap-7">

        {items.map((item, i) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (

            <Link
              key={i}
              href={item.href}
              className="
              flex
              items-center
              gap-4
              group
              "
            >

              <Icon
                size={23}
                strokeWidth={1.5}
                className={`
                  transition
                  ${
                    active
                      ? "text-[#d6b98c]"
                      : "text-white/90"
                  }
                `}
              />

              <span
                className={`
                  text-[18px]
                  font-light
                  transition
                  ${
                    active
                      ? "text-[#d6b98c]"
                      : "text-white/95"
                  }
                `}
              >
                {item.label}
              </span>

            </Link>

          );

        })}

      </nav>

      {/* BOTTOM DOT */}
      <div
        className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        w-10
        h-10
        rounded-full
        border
        border-white/20
        flex
        items-center
        justify-center
        "
      >
        <div
          className="
          w-2
          h-2
          rounded-full
          bg-white
          "
        />
      </div>

    </aside>

  );

}