import type { Metadata } from "next";

import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import SectorSection from "@/components/SectorSection";

/* ---------------- SEO ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gcterritoires.fr"),

  title: {
    default:
      "GC Territoires | Cabinet de conseil en développement territorial",
    template: "%s | GC Territoires",
  },

  description:
    "GC Territoires accompagne les collectivités territoriales, entreprises et opérateurs immobiliers dans leurs projets de développement territorial, d’aménagement du territoire et de relations institutionnelles.",

  keywords: [
    "développement territorial",
    "cabinet conseil territorial",
    "aménagement du territoire",
    "stratégie territoriale",
    "relations institutionnelles",
    "collectivités territoriales",
    "opérateurs immobiliers",
    "stratégie foncière",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "GC Territoires | Conseil en développement territorial",
    description:
      "Un cabinet de conseil spécialisé dans l’accompagnement des collectivités, entreprises et opérateurs dans leurs stratégies territoriales.",
    url: "https://www.gcterritoires.fr",
    siteName: "GC Territoires",
    locale: "fr_FR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


/* ---------------- PAGE ---------------- */

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white">

      {/* Données structurées Google */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "GC Territoires",
            "description":
              "Cabinet de conseil en développement territorial, aménagement du territoire et relations institutionnelles.",
            "areaServed": {
              "@type": "Country",
              "name": "France",
            },
            "serviceType": [
              "Développement territorial",
              "Aménagement du territoire",
              "Relations institutionnelles",
              "Stratégie foncière",
            ],
          }),
        }}
      />


      {/* HERO */}

      <Hero />


      {/* INTRO SEO */}

      <section
        className="mx-auto max-w-6xl px-6 py-24"
        aria-labelledby="intro-title"
      >

        <h2
          id="intro-title"
          className="text-4xl font-semibold tracking-tight text-[#111111]"
        >
          Cabinet de conseil en développement territorial pour collectivités et acteurs privés
        </h2>


        <p className="mt-8 text-lg leading-9 text-gray-600">
          GC Territoires accompagne les collectivités territoriales,
          entreprises, opérateurs immobiliers et aménageurs dans leurs
          projets de développement territorial, d’aménagement et de stratégie
          d’implantation.
        </p>


        <p className="mt-6 text-lg leading-9 text-gray-600">
          Notre expertise repose sur une connaissance fine des territoires,
          des politiques publiques et des dynamiques économiques locales.
          Nous créons des passerelles entre acteurs publics et privés afin
          de faciliter l’émergence et la réalisation de projets structurants.
        </p>

      </section>



      {/* PRESENTATION */}

      <AboutSection />



      {/* EXPERTISES */}

      <ExpertiseSection />



      {/* SECTEURS */}

      <SectorSection />


{/* FAQ SEO */}

<section
  className="border-t border-[#ececec] bg-white"
  aria-labelledby="faq-title"
>
  <div className="mx-auto max-w-5xl px-6 py-24">

    {/* Titre */}
    <div className="mx-auto max-w-3xl text-center">
      <h2
        id="faq-title"
        className="text-4xl lg:text-5xl font-medium tracking-[-0.05em] text-[#111]"
      >
        Questions fréquentes
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Retrouvez les réponses aux principales questions concernant notre
        accompagnement des projets territoriaux.
      </p>
    </div>

    {/* Questions */}
    <div className="mx-auto mt-20 max-w-3xl text-center space-y-16">

      <article>
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Pourquoi faire appel à un cabinet de conseil territorial ?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Un cabinet spécialisé accompagne les collectivités et acteurs privés
          dans la définition de stratégies adaptées aux enjeux économiques,
          fonciers, institutionnels et territoriaux.
        </p>
      </article>

      <article>
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Quels types de projets accompagne GC Territoires ?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          GC Territoires intervient sur les projets d’aménagement,
          d’implantation, de développement territorial, de dialogue
          institutionnel et de valorisation des opportunités foncières.
        </p>
      </article>

      <article>
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Avec quels acteurs travaillez-vous ?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Nous accompagnons les collectivités territoriales, entreprises,
          investisseurs, aménageurs et opérateurs immobiliers dans leurs
          stratégies de développement.
        </p>
      </article>

    </div>

  </div>
</section>
      {/* CTA FINAL */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">


          <h2
            className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[#111111] lg:text-5xl"
          >
            Vous avez un projet de développement territorial ?
          </h2>


          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5f5f5f]">
            Développement territorial, aménagement, stratégie publique ou
            relations institutionnelles : échangeons sur vos enjeux et vos
            ambitions.
          </p>


          <a
            href="/contact"
            className="mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
          >
            Prendre contact
          </a>


        </div>

      </section>


    </main>
  );
}