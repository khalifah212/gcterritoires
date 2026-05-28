"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

function SearchContent() {
  const params = useSearchParams();
  const router = useRouter();

  const from = params.get("from");
  const to = params.get("to");

  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const allFlights = [
    {
      id: 1,
      airline: "Etihad Airways",
      flight: "EY201",
      from: "CDG",
      to: "JFK",
      departure: "2026-05-28T08:00:00",
      arrival: "2026-05-28T13:00:00",
      duration: "8h 00m",
      price: 899,
      seats: 12,
      status: "Available",
    },
    {
      id: 2,
      airline: "Etihad Airways",
      flight: "EY305",
      from: "DXB",
      to: "LHR",
      departure: "2026-05-29T09:30:00",
      arrival: "2026-05-29T14:20:00",
      duration: "7h 50m",
      price: 1199,
      seats: 6,
      status: "Available",
    },
  ];

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (!from && !to) {
        setFlights(allFlights);
        setLoading(false);
        return;
      }

      const filtered = allFlights.filter((f) => {
        return (
          f.from.toLowerCase() === from?.toLowerCase() &&
          f.to.toLowerCase() === to?.toLowerCase()
        );
      });

      setFlights(filtered);
      setLoading(false);
    }, 600);
  }, [from, to]);

  const handleBooking = (flight: any) => {
    localStorage.setItem("selectedFlight", JSON.stringify(flight));
    router.push("/checkout");
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f6]">
      <Sidebar />

      <section className="ml-[220px] w-full px-14 py-14">
        {/* HEADER */}
        <div className="mb-14">
          <p className="uppercase tracking-[6px] text-[#8A1538] text-sm font-medium">
            Flight Search
          </p>

          <h1 className="text-6xl font-light text-gray-900 mt-4">
            {from && to ? (
              <span>
                <span className="text-[#8A1538]">{from}</span> →{" "}
                <span className="text-[#8A1538]">{to}</span>
              </span>
            ) : (
              "Available Flights"
            )}
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            {flights.length} flights found
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-14 h-14 border-4 border-[#8A1538] border-t-transparent rounded-full animate-spin" />
            <p className="mt-6 text-gray-500">Searching flights...</p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && flights.length === 0 && (
          <div className="bg-white rounded-[30px] p-20 text-center shadow-sm">
            <div className="text-7xl">✈️</div>
            <h2 className="text-4xl font-light mt-6">
              No flights found
            </h2>
            <p className="text-gray-500 mt-3">
              Try different destinations
            </p>
          </div>
        )}

        {/* FLIGHTS */}
        <div className="grid grid-cols-1 gap-8">
          {!loading &&
            flights.map((flight) => (
              <div
                key={flight.id}
                className="group bg-white rounded-[30px] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* TOP */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#8A1538] font-medium text-sm uppercase tracking-wider">
                      {flight.airline}
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-900 mt-2">
                      {flight.flight}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {flight.duration}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="bg-green-50 text-green-700 px-4 py-1 rounded-full text-xs inline-block">
                      {flight.status}
                    </div>

                    <p className="text-4xl font-light text-[#8A1538] mt-4">
                      €{flight.price}
                    </p>

                    <p className="text-gray-400 text-sm">
                      {flight.seats} seats left
                    </p>
                  </div>
                </div>

                {/* ROUTE */}
                <div className="flex items-center justify-between mt-10 bg-gray-50 rounded-2xl p-6">
                  <div>
                    <p className="text-gray-400 text-xs uppercase">
                      From
                    </p>
                    <p className="text-3xl font-light">
                      {flight.from}
                    </p>
                  </div>

                  <div className="text-[#8A1538] text-2xl">✈</div>

                  <div className="text-right">
                    <p className="text-gray-400 text-xs uppercase">
                      To
                    </p>
                    <p className="text-3xl font-light">
                      {flight.to}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBooking(flight)}
                  className="mt-8 w-full bg-[#8A1538] hover:bg-[#6f102d] transition text-white py-4 rounded-2xl text-lg font-medium shadow-md group-hover:scale-[1.01]"
                >
                  Réserver ce vol
                </button>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}