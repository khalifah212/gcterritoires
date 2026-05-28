"use client";

import { useState } from "react";
import { api } from "../lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      console.log("LOGIN TRY:", { email, password });

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("FULL RESPONSE:", res);
      console.log("DATA:", res.data);

      const token = res.data?.access_token;

      if (!token) {
        console.error("NO TOKEN RECEIVED:", res.data);
        alert("❌ Backend ne renvoie pas access_token");
        return;
      }

      // 💾 SAVE TOKEN
      localStorage.setItem("token", token);

      const saved = localStorage.getItem("token");
      console.log("TOKEN SAVED:", saved);

      if (!saved) {
        alert("❌ Token non sauvegardé");
        return;
      }

      // 🚀 REDIRECT AFTER LOGIN
      router.push("/bookings");

    } catch (err: any) {
      console.log("LOGIN ERROR:", err?.response?.data || err.message);
      alert(
        err?.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}