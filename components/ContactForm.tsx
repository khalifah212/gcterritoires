
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    // On garde la référence du formulaire avant le await
    const formElement = e.currentTarget;

    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: form.get("name"),
          email: form.get("email"),
          sujet: form.get("subject"),
          message: form.get("message"),
        }),
      });


      if (response.ok) {

        setSuccess(
          "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais."
        );

        // Reset sécurisé après l'envoi
        formElement.reset();

      } else {

        setError(
          "Une erreur est survenue lors de l’envoi. Merci de réessayer."
        );

      }


    } catch (error) {

      console.error("Erreur contact :", error);

      setError(
        "Impossible d’envoyer votre message actuellement. Merci de réessayer."
      );

    } finally {

      setLoading(false);

    }
  }


  return (

    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6"
    >

      <div>

        <label className="mb-2 block text-sm font-medium text-[#111]">
          Nom
        </label>

        <input
          name="name"
          required
          disabled={loading}
          placeholder="Votre nom"
          className="
            w-full
            rounded-xl
            border
            border-[#ddd]
            px-5
            py-4
            text-sm
            outline-none
            transition
            focus:border-[#8F1D1D]
            disabled:cursor-not-allowed
            disabled:bg-gray-100
          "
        />

      </div>



      <div>

        <label className="mb-2 block text-sm font-medium text-[#111]">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          disabled={loading}
          placeholder="Votre adresse e-mail"
          className="
            w-full
            rounded-xl
            border
            border-[#ddd]
            px-5
            py-4
            text-sm
            outline-none
            transition
            focus:border-[#8F1D1D]
            disabled:cursor-not-allowed
            disabled:bg-gray-100
          "
        />

      </div>



      <div>

        <label className="mb-2 block text-sm font-medium text-[#111]">
          Sujet
        </label>

        <input
          name="subject"
          required
          disabled={loading}
          placeholder="Objet de votre demande"
          className="
            w-full
            rounded-xl
            border
            border-[#ddd]
            px-5
            py-4
            text-sm
            outline-none
            transition
            focus:border-[#8F1D1D]
            disabled:cursor-not-allowed
            disabled:bg-gray-100
          "
        />

      </div>



      <div>

        <label className="mb-2 block text-sm font-medium text-[#111]">
          Message
        </label>

        <textarea
          name="message"
          required
          disabled={loading}
          rows={6}
          placeholder="Décrivez votre projet..."
          className="
            w-full
            rounded-xl
            border
            border-[#ddd]
            px-5
            py-4
            text-sm
            outline-none
            transition
            focus:border-[#8F1D1D]
            disabled:cursor-not-allowed
            disabled:bg-gray-100
          "
        />

      </div>




      {success && (

        <p
          className="
            rounded-xl
            border
            border-green-200
            bg-green-50
            p-4
            text-sm
            text-green-700
          "
        >
          {success}
        </p>

      )}



      {error && (

        <p
          className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            p-4
            text-sm
            text-red-700
          "
        >
          {error}
        </p>

      )}






      <button
        type="submit"
        disabled={loading}
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-[#8F1D1D]
          px-9
          py-4
          text-[15px]
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#761818]
          hover:shadow-lg
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >

        {loading
          ? "Envoi en cours..."
          : "Envoyer le message"
        }

        <ArrowRight size={18} />

      </button>


    </form>

  );
}

