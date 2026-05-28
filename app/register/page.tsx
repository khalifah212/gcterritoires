"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import { api }
from "../lib/api";

export default function RegisterPage() {

  const router =
    useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // -------------------------
  // REGISTER
  // -------------------------
  const handleRegister =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      setLoading(true);

      try {

        const res =
          await api.post(
            "/auth/register",
            {
              name,
              email,
              password,
            }
          );

        // SAVE TOKEN
        localStorage.setItem(
          "token",
          res.data.access_token
        );

        // SAVE USER
        localStorage.setItem(
          "user",
          JSON.stringify(
            res.data.user
          )
        );

        alert(
          "Account created ✈️"
        );

        router.push(
          "/"
        );

      } catch (err: any) {

        console.log(err);

        alert(
          err?.response?.data?.message ||
          "Register failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <main
      className="
      min-h-screen
      bg-[#050816]
      flex
      items-center
      justify-center
      px-6
      "
    >

      <div
        className="
        w-full
        max-w-xl
        bg-white/5
        border
        border-white/10
        rounded-[40px]
        p-12
        text-white
        "
      >

        {/* HEADER */}
        <div className="mb-10">

          <p
            className="
            uppercase
            tracking-[6px]
            text-blue-400
            text-sm
            "
          >
            SkyBook Elite
          </p>

          <h1
            className="
            text-5xl
            font-black
            mt-4
            "
          >
            Create Account
          </h1>

        </div>

        {/* FORM */}
        <form
          onSubmit={
            handleRegister
          }
          className="
          flex
          flex-col
          gap-5
          "
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="
            bg-white/10
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            "
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            bg-white/10
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            "
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
            bg-white/10
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            outline-none
            "
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
            mt-4
            bg-blue-600
            hover:bg-blue-500
            transition
            py-4
            rounded-2xl
            font-bold
            "
          >

            {loading
              ? "Creating..."
              : "Register"}

          </button>

        </form>

      </div>

    </main>

  );
}