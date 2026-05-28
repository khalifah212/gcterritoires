"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function CheckoutPage() {
  const router = useRouter();

  const [flight, setFlight] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  // -----------------------------------
  // LOAD FLIGHT
  // -----------------------------------
  useEffect(() => {
    const stored = localStorage.getItem("selectedFlight");

    // 👉 si aucun vol => page cancel DIRECT
    if (!stored) {
      window.location.href = "/cancel";
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      if (!parsed) {
        window.location.href = "/cancel";
        return;
      }

      setFlight(parsed);
    } catch (err) {
      console.error(err);
      window.location.href = "/cancel";
    }
  }, []);

  // -----------------------------------
  // STRIPE PAYMENT
  // -----------------------------------
  const handlePayment = async () => {
    if (!flight) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://reservation-vols.onrender.com/stripe/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...flight,
            price: Number(flight.price),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Backend error");
      }

      if (!data.url) {
        throw new Error("Missing Stripe URL");
      }

      // 👉 Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Stripe error");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------
  // NO RENDER
  // -----------------------------------
  if (!flight) return null;

  // -----------------------------------
  // UI
  // -----------------------------------
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f6]">
      <Sidebar />

      <section className="ml-[220px] w-full px-14 py-14">
        {/* HEADER */}
        <div className="mb-14">
          <p className="uppercase tracking-[6px] text-[#8A1538] text-sm font-medium">
            Secure Checkout
          </p>

          <h1 className="text-6xl font-light text-gray-900 mt-4">
            Confirm your booking
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Review your flight before payment
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[35px] p-12 shadow-xl border border-gray-100 max-w-5xl">
          {/* TOP */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[#8A1538] uppercase tracking-wider text-sm">
                Airline
              </p>

              <h2 className="text-4xl font-semibold mt-2 text-gray-900">
                {flight.airline}
              </h2>

              <p className="text-gray-500 mt-2">
                Flight {flight.flight}
              </p>
            </div>

            <div className="bg-green-50 text-green-700 px-5 py-2 rounded-full text-sm">
              Secure Payment
            </div>
          </div>

          {/* ROUTE */}
          <div className="mt-12 bg-gray-50 rounded-3xl p-10 flex items-center justify-between">
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-widest">
                Departure
              </p>

              <p className="text-6xl font-light mt-3">
                {flight.from}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-[#8A1538] text-5xl">
                ✈
              </div>

              <p className="text-gray-400 mt-2 text-sm">
                Direct Flight
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-400 uppercase text-xs tracking-widest">
                Arrival
              </p>

              <p className="text-6xl font-light mt-3">
                {flight.to}
              </p>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-400 text-sm uppercase">
                Departure Time
              </p>

              <p className="text-xl mt-3 text-gray-800">
                {new Date(
                  flight.departure
                ).toLocaleString()}
              </p>
            </div>

            <div className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-400 text-sm uppercase">
                Arrival Time
              </p>

              <p className="text-xl mt-3 text-gray-800">
                {new Date(
                  flight.arrival
                ).toLocaleString()}
              </p>
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-12 flex items-end justify-between">
            <div>
              <p className="text-gray-400 uppercase text-sm tracking-widest">
                Total Price
              </p>

              <p className="text-7xl font-light text-[#8A1538] mt-3">
                €{flight.price}
              </p>
            </div>

            <div className="text-right text-sm text-gray-500">
              Visa • Mastercard • Apple Pay
            </div>
          </div>

          {/* SECURITY BOX */}
          <div className="mt-10 bg-green-50 border border-green-100 rounded-3xl p-6">
            <p className="text-green-700 leading-8">
              ✔ Paiement 100% sécurisé via Stripe
              <br />
              ✔ Données bancaires cryptées
              <br />
              ✔ Confirmation instantanée
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-12">
            <button
              onClick={() => router.push("/cancel")}
              className="w-1/3 border border-gray-200 hover:bg-gray-100 transition py-5 rounded-2xl text-lg"
            >
              Cancel
            </button>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-2/3 bg-[#8A1538] hover:bg-[#6f102d] transition text-white py-5 rounded-2xl text-xl font-medium shadow-lg"
            >
              {loading
                ? "Redirecting to Stripe..."
                : "Pay Securely"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}