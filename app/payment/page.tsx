"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function PaymentPage() {
  const router = useRouter();

  const [flight, setFlight] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // -----------------------------------
  // BLOCK ACCESS DIRECT / CLEAN BACK NAV
  // -----------------------------------
  useEffect(() => {
    const selectedFlight = localStorage.getItem("selectedFlight");

    if (!selectedFlight) {
      router.replace("/search");
      return;
    }

    setFlight(JSON.parse(selectedFlight));
  }, [router]);

  // -----------------------------------
  // STRIPE PAYMENT
  // -----------------------------------
  const handlePayment = async () => {
    if (!flight) return;

    setLoading(true);

    try {
      // flag pour détecter retour Stripe
      sessionStorage.setItem("fromStripe", "1");

      const response = await fetch(
        "https://reservation-vols.onrender.com/stripe/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            airline: flight.airline,
            flight: flight.flight,
            from: flight.from,
            to: flight.to,
            departure: flight.departure,
            arrival: flight.arrival,
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

      // redirect Stripe
      window.location.href = data.url;
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Erreur Stripe");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------
  // HANDLE RETURN FROM STRIPE
  // -----------------------------------
  useEffect(() => {
    const cameFromStripe = sessionStorage.getItem("fromStripe");

    if (cameFromStripe) {
      sessionStorage.removeItem("fromStripe");

      // 👉 REDIRECTION APRÈS RETOUR BROWSER
      router.replace("/success");
    }
  }, [router]);

  if (!flight) return null;

  return (
    <main className="flex bg-[#f7f7f7]">
      <Sidebar />

      <section className="ml-[220px] min-h-screen w-full px-16 py-16">
        <div className="mb-16">
          <p className="uppercase tracking-[6px] text-[#8A1538] mb-4 text-sm">
            Secure Payment
          </p>

          <h1 className="text-6xl font-light text-black">
            Stripe Checkout
          </h1>
        </div>

        <div className="bg-white rounded-[40px] p-12 shadow-sm max-w-4xl">
          <h2 className="text-4xl font-semibold">
            {flight.airline}
          </h2>

          <p className="mt-2 text-slate-500">
            Flight {flight.flight}
          </p>

          <div className="mt-10 flex items-center gap-8">
            <p className="text-5xl font-light">{flight.from}</p>
            <span className="text-[#8A1538] text-4xl">→</span>
            <p className="text-5xl font-light">{flight.to}</p>
          </div>

          <p className="mt-8 text-slate-500">
            €{flight.price}
          </p>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-12 w-full bg-[#8A1538] text-white py-5 rounded-full text-xl"
          >
            {loading ? "Redirection..." : "Payer avec Stripe"}
          </button>
        </div>
      </section>
    </main>
  );
}