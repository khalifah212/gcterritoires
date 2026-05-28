"use client";

import { Flight } from "@/types/flight";

type Props = {
  flights: Flight[];

  bookFlight: (
    f: Flight
  ) => void;
};

export default function FlightResults({
  flights,
  bookFlight,
}: Props) {

  if (!flights.length)
    return null;

  return (
    <section
      className="
        ml-[92px]
        px-20
        py-32
      "
    >

      <h2
        className="
          text-6xl
          mb-16
          text-white
        "
      >
        Vols disponibles
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          gap-8
        "
      >

        {flights.map((f) => (

          <div
            key={f.id}
            className="
              bg-white/5
              border
              border-white/10
              rounded-[32px]
              p-10
              text-white
            "
          >

            <h3
              className="
                text-4xl
                font-light
              "
            >
              {f.airline}
            </h3>

            <p className="mt-4 text-white/70">
              {f.from} → {f.to}
            </p>

            <div
              className="
                mt-8
                text-[#C6A46A]
                text-5xl
                font-light
              "
            >
              €{f.price}
            </div>

            <button
              onClick={() =>
                bookFlight(f)
              }
              className="
                mt-8
                bg-white
                text-black
                px-8
                py-4
                rounded-full
              "
            >
              Book
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}