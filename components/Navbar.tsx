"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

export default function Navbar() {

  const router =
    useRouter();

  const [
    isLoggedIn,
    setIsLoggedIn
  ] = useState(false);

  // -------------------------
  // CHECK AUTH
  // -------------------------
  useEffect(() => {

    const checkAuth =
      () => {

        const token =
          localStorage.getItem(
            "token"
          );

        setIsLoggedIn(
          !!token
        );

      };

    checkAuth();

    window.addEventListener(
      "storage",
      checkAuth
    );

    return () => {

      window.removeEventListener(
        "storage",
        checkAuth
      );

    };

  }, []);

  // -------------------------
  // LOGOUT
  // -------------------------
  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      setIsLoggedIn(
        false
      );

      router.push("/");

    };

  return (

    <header
      className="
      fixed
      top-0
      left-[220px]
      w-[calc(100%-220px)]
      h-20
      z-40
      bg-black/40
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >

      <div
        className="
        w-full
        h-full
        px-10
        flex
        items-center
        justify-between
        "
      >

        {/* LOGO */}
        <Link
          href="/"
          className="
          text-white
          text-3xl
          tracking-[8px]
          font-light
          "
        >
          ETIHAD
        </Link>

        {/* MENU */}
        <nav
          className="
          flex
          items-center
          gap-10
          text-white
          "
        >

          <Link
            href="/"
            className="
            hover:text-[#d6b98c]
            transition
            "
          >
            Accueil
          </Link>

          <Link
            href="/search"
            className="
            hover:text-[#d6b98c]
            transition
            "
          >
            Réserver
          </Link>

          <Link
            href="/bookings"
            className="
            hover:text-[#d6b98c]
            transition
            "
          >
            Gérer
          </Link>

          <Link
            href="/planning"
            className="
            hover:text-[#d6b98c]
            transition
            "
          >
            Voyager
          </Link>

          <Link
            href="/help"
            className="
            hover:text-[#d6b98c]
            transition
            "
          >
            Aide
          </Link>

        </nav>

        {/* AUTH */}
        <div
          className="
          flex
          items-center
          gap-4
          "
        >

          {!isLoggedIn && (

            <>

              <Link
                href="/login"
                className="
                text-white
                hover:text-[#d6b98c]
                transition
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                px-6
                py-3
                rounded-full
                bg-white
                text-black
                hover:bg-[#f2f2f2]
                transition
                "
              >
                Register
              </Link>

            </>

          )}

          {isLoggedIn && (

            <>

              <Link
                href="/profile"
                className="
                text-white
                hover:text-[#d6b98c]
                transition
                "
              >
                Profile
              </Link>

              <button
                onClick={
                  handleLogout
                }
                className="
                px-6
                py-3
                rounded-full
                bg-red-500
                text-white
                hover:bg-red-600
                transition
                "
              >
                Logout
              </button>

            </>

          )}

        </div>

      </div>

    </header>

  );

}