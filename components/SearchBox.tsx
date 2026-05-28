"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    router.push(
      `/search?from=${from}&to=${to}`
    );
  };

  return (
    <section
      className="
      w-full
      px-10
      -mt-20
      relative
      z-20
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        bg-white
        rounded-[40px]
        shadow-xl
        p-10
      "
      >
        <h2
          className="
          text-4xl
          font-light
          mb-10
        "
        >
          Search Flights
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
        "
        >
          {/* FROM */}
          <div>
            <p
              className="
              text-sm
              uppercase
              tracking-widest
              text-slate-400
              mb-3
            "
            >
              From
            </p>

            <input
              type="text"
              placeholder="CDG"
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
              className="
              w-full
              border
              border-slate-200
              rounded-2xl
              px-5
              py-4
              text-xl
              outline-none
            "
            />
          </div>

          {/* TO */}
          <div>
            <p
              className="
              text-sm
              uppercase
              tracking-widest
              text-slate-400
              mb-3
            "
            >
              To
            </p>

            <input
              type="text"
              placeholder="JFK"
              value={to}
              onChange={(e) =>
                setTo(e.target.value)
              }
              className="
              w-full
              border
              border-slate-200
              rounded-2xl
              px-5
              py-4
              text-xl
              outline-none
            "
            />
          </div>

          {/* BUTTON */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="
              w-full
              bg-[#8A1538]
              hover:bg-[#70112e]
              transition
              text-white
              py-4
              rounded-2xl
              text-xl
            "
            >
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}