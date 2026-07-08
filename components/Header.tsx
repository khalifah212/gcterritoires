"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const links = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/cabinet",
    label: "Notre approche",
  },
  {
    href: "/expertises",
    label: "Expertises",
  },
  {
    href: "/fondateur",
    label: "Le fondateur",
  },
];


export default function Header() {

  const [open, setOpen] = useState(false);


  return (

    <>

      <header className="sticky top-0 z-50 border-b border-[#ececec] bg-[#fcfcfb]/95 backdrop-blur-md">


        <div
          className="
            mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between
            px-5 sm:px-6
            lg:h-24 lg:px-8
          "
        >


          {/* LOGO */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center"
          >

            <Image
              src="/LogoGCT5.png"
              alt="GC Territoires"
              width={320}
              height={100}
              priority
              className="
                h-12
                sm:h-14
                lg:h-16
                w-auto
                object-contain
                transition-transform
                duration-300
                hover:scale-[1.02]
              "
            />

          </Link>





          {/* NAVIGATION DESKTOP */}

          <nav className="hidden items-center gap-10 lg:flex">


            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className="
                  text-[15px]
                  font-medium
                  text-[#555]
                  transition-colors
                  duration-300
                  hover:text-[#8F1D1D]
                "
              >

                {link.label}

              </Link>

            ))}



            <Link
              href="/contact"
              className="
                rounded-full
                bg-[#8F1D1D]
                px-7
                py-3
                text-[15px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#761818]
                hover:shadow-lg
              "
            >

              Contact

            </Link>


          </nav>





          {/* BOUTON MOBILE */}

          <button
            onClick={() => setOpen(!open)}
            className="
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              lg:hidden
            "
            aria-label={
              open
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
          >

            {open ? (

              <X
                size={28}
                strokeWidth={2}
                className="text-[#111]"
              />

            ) : (

              <Menu
                size={28}
                strokeWidth={2}
                className="text-[#111]"
              />

            )}

          </button>


        </div>


      </header>






      {/* MENU MOBILE */}

      {open && (

        <>


          {/* OVERLAY */}

          <div
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-40
              bg-black/20
              backdrop-blur-sm
              lg:hidden
            "
          />




          {/* PANNEAU MENU */}

          <div
            className="
              fixed
              left-0
              right-0
              top-[4.5rem]
              z-50
              bg-[#fcfcfb]
              shadow-xl
              lg:hidden
            "
          >


            <nav className="flex flex-col px-6 py-8">


              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b
                    border-[#ececec]
                    py-5
                    text-lg
                    font-medium
                    text-[#444]
                    transition-colors
                    hover:text-[#8F1D1D]
                  "
                >

                  {link.label}

                </Link>

              ))}




              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-8
                  rounded-full
                  bg-[#8F1D1D]
                  py-4
                  text-center
                  text-lg
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#761818]
                "
              >

                Contact

              </Link>


            </nav>


          </div>


        </>

      )}


    </>

  );

}