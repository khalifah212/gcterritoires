"use client";

import { useState } from "react";

type Props = {
  onSearch: (
    from: string,
    to: string
  ) => void;
};

export default function FlightSearch({
  onSearch,
}: Props) {

  const [from, setFrom] =
    useState("");

  const [to, setTo] =
    useState("");

  return (
    <section
      className="
        ml-[92px]
        px-20
        py-24
      "
    >

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-[40px]
          p-10
        "
      >

        <h2
          className="
            text-5xl
            text-white
            font-light
          "
        >
          Search Flights
        </h2>

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-10
          "
        >

          <input
            value={from}
            onChange={(e) =>
              setFrom(
                e.target.value
              )
            }
            placeholder="From"
            className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              text-white
              outline-none
            "
          />

          <input
            value={to}
            onChange={(e) =>
              setTo(
                e.target.value
              )
            }
            placeholder="To"
            className="
              bg-white/10
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              text-white
              outline-none
            "
          />

          <button
            onClick={() =>
              onSearch(from, to)
            }
            className="
              bg-white
              text-black
              rounded-2xl
              font-medium
            "
          >
            Search
          </button>

        </div>

      </div>

    </section>
  );
}