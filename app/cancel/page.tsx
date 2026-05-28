"use client";

import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center bg-white p-10 rounded-3xl shadow-md">
        <h1 className="text-4xl font-light text-red-600">
          Paiement annulé
        </h1>

        <p className="mt-4 text-gray-600">
          Vous pouvez réessayer quand vous voulez.
        </p>

        <button
          onClick={() => router.push("/checkout")}
          className="mt-8 bg-[#8A1538] text-white px-6 py-3 rounded-xl"
        >
          Retour checkout
        </button>

        <button
          onClick={() => router.push("/search")}
          className="mt-4 block text-gray-500 underline"
        >
          Retour recherche
        </button>
      </div>
    </main>
  );
}