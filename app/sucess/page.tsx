"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();

  const sessionId =
    searchParams.get("session_id");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f7fb] to-[#eef1f6] px-6">
      <div className="bg-white p-14 rounded-[40px] shadow-xl max-w-2xl w-full text-center border border-gray-100">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto">
          ✓
        </div>

        <h1 className="text-5xl font-light mt-10 text-gray-900">
          Payment Successful
        </h1>

        <p className="text-gray-500 mt-6 text-lg leading-8">
          Your flight reservation has been confirmed.
          <br />
          Thank you for choosing us.
        </p>

        {sessionId && (
          <div className="mt-8 bg-gray-50 rounded-2xl p-5 text-left">
            <p className="text-gray-400 text-sm uppercase">
              Stripe Session
            </p>

            <p className="text-sm mt-2 break-all text-gray-700">
              {sessionId}
            </p>
          </div>
        )}

        <div className="flex gap-4 mt-12">
          <Link
            href="/bookings"
            className="flex-1 bg-[#8A1538] hover:bg-[#6f102d] transition text-white py-4 rounded-2xl text-lg font-medium"
          >
            My Bookings
          </Link>

          <Link
            href="/search"
            className="flex-1 border border-gray-200 hover:bg-gray-100 transition py-4 rounded-2xl text-lg"
          >
            Search Flights
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}