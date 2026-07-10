import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";

/* ---------------- SEO ---------------- */

export const metadata: Metadata = {
  title:
    "Expertises en développement territorial | Stratégie, implantation et relations institutionnelles | GC Territoires",

  description:
    "GC Territoires accompagne collectivités, entreprises, investisseurs et opérateurs dans leurs projets de développement territorial, d’implantation, d’aménagement, de stratégie foncière et de relations institutionnelles.",

  keywords: [
    "développement territorial",
    "cabinet conseil territorial",
    "stratégie territoriale",
    "relations institutionnelles",
    "affaires publiques",
    "stratégie foncière",
    "implantation territoriale",
    "aménagement du territoire",
  ],

  alternates: {
    canonical: "/expertises",
  },

  openGraph: {
    title: "Expertises | GC Territoires",
    description:
      "Une expertise au croisement des enjeux publics et privés pour accompagner les projets territoriaux.",
    type: "website",
    locale: "fr_FR",
  },
};


/* ---------------- DATA ---------------- */

const expertises = [
  {
    number: "01",
    title: "Développement territorial",
    text:
      "Accompagnement des entreprises, opérateurs et investisseurs dans leurs stratégies d’implantation, de développement et de création de valeur sur les territoires.",
  },
  {
    number: "02",
    title: "Relations institutionnelles et affaires publiques",
    text:
      "Construction d’un dialogue structuré avec les collectivités, élus, administrations et acteurs économiques pour faciliter les projets.",
  },
  {
    number: "03",
    title: "Détection foncière et accès amont",
    text:
      "Identification, qualification et sécurisation d’opportunités foncières, immobilières et économiques avant le lancement des projets.",
  },
  {
    number: "04",
    title: "Marchés publics et consultations",
    text:
      "Accompagnement stratégique des entreprises dans leurs réponses aux consultations et procédures complexes.",
    details: [
      "Analyse stratégique des consultations",
      "Lecture des enjeux territoriaux",
      "Valorisation des atouts locaux",
      "Optimisation des candidatures",
    ],
  },
  {
    number: "05",
    title: "Stratégie de développement et implantation",
    text:
      "Analyse des dynamiques locales et accompagnement des décideurs dans leurs choix d’implantation et de développement.",
  },
];


const interventions = [
  "Structuration d’une stratégie de développement territorial pour une collectivité.",
  "Identification d’opportunités foncières pour un opérateur immobilier.",
  "Accompagnement institutionnel d’un projet d’aménagement complexe.",
  "Appui aux entreprises dans leurs réponses aux consultations publiques.",
  "Mise en relation d’acteurs publics et privés autour d’un projet stratégique.",
];



/* ---------------- PAGE ---------------- */

export default function ExpertisesPage() {
  return (
    <main className="bg-[#fcfcfb]">

      {/* SCHEMA SEO */}

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GC Territoires",
            "description":
              "Cabinet de conseil en développement territorial, aménagement et relations institutionnelles.",
          }),
        }}
      />


      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name":
              "Conseil en développement territorial",
            "description":
              "Accompagnement des collectivités, entreprises, investisseurs et opérateurs dans leurs projets territoriaux.",
            "provider": {
              "@type": "Organization",
              "name": "GC Territoires",
            },
            "serviceType": [
              "Développement territorial",
              "Relations institutionnelles",
              "Stratégie foncière",
              "Implantation territoriale",
            ],
          }),
        }}
      />


      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name":
                  "Quelles sont les expertises de GC Territoires ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "GC Territoires intervient en développement territorial, relations institutionnelles, stratégie foncière, implantation et accompagnement des consultations publiques.",
                },
              },
              {
                "@type": "Question",
                "name":
                  "Pourquoi faire appel à un cabinet de conseil territorial ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Un cabinet de conseil territorial permet de structurer les projets, faciliter les relations entre acteurs publics et privés et sécuriser leur mise en œuvre.",
                },
              },
            ],
          }),
        }}
      />


      {/* HERO */}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#8F1D1D]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                Nos expertises
              </span>
            </div>


            <h1 className="mt-8 text-[3.2rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#111] sm:text-6xl lg:text-[5rem]">

              Stratégie territoriale.

              <br />

              <span className="text-[#8F1D1D]">
                Relations institutionnelles.
              </span>

              <br />

              Mise en œuvre des projets.

            </h1>


            <p className="mt-10 max-w-[46rem] text-[1.15rem] leading-9 text-[#5f5f5f]">
              GC Territoires accompagne les acteurs publics et privés dans leurs
              stratégies de développement territorial, d’implantation et de
              transformation des territoires.
            </p>

          </div>

        </div>
      </section>
      
      {/* INTRO SEO */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-4xl">

            <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
              Une expertise au croisement
              <br />
              des enjeux publics et privés.
            </h2>


            <p className="mt-8 text-lg leading-8 text-gray-600">
              Notre accompagnement repose sur une compréhension fine des
              territoires, des politiques publiques et des dynamiques
              économiques locales afin de faciliter l’émergence et la
              réalisation de projets stratégiques.
            </p>

          </div>

        </div>

      </section>



      {/* EXPERTISES */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <h2 className="mb-12 text-4xl font-medium tracking-[-0.05em] text-[#111]">
            Nos domaines d’expertise en développement territorial
          </h2>


          <div className="grid gap-10 lg:grid-cols-2">

            {expertises.map((item) => (

              <article
                key={item.number}
                className="rounded-3xl border border-[#ececec] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="text-xs font-semibold tracking-[0.2em] text-[#8F1D1D]">
                  {item.number}
                </div>


                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-[#111]">
                  {item.title}
                </h3>


                <p className="mt-5 text-base leading-8 text-gray-600">
                  {item.text}
                </p>


                {item.details && (

                  <ul className="mt-8 space-y-4">

                    {item.details.map((detail) => (

                      <li
                        key={detail}
                        className="flex gap-3 text-sm text-gray-700"
                      >

                        <span className="mt-2 h-2 w-2 rounded-full bg-[#8F1D1D]" />

                        {detail}

                      </li>

                    ))}

                  </ul>

                )}

              </article>

            ))}

          </div>

        </div>

      </section>




      {/* INTERVENTIONS */}

      <section className="border-y border-[#ececec] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3">

              <span className="h-px w-10 bg-[#8F1D1D]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8F1D1D]">
                Exemples d’intervention
              </span>

            </div>


            <h2 className="mt-8 text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
              Des missions adaptées
              <br />
              aux enjeux des territoires.
            </h2>


            <p className="mt-8 text-lg leading-8 text-gray-600">
              GC Territoires intervient auprès des acteurs publics et privés
              sur des projets nécessitant une compréhension fine des enjeux
              locaux, institutionnels et économiques.
            </p>


          </div>



          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {interventions.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-[#ececec] bg-[#fcfcfb] p-7"
              >

                <div className="flex gap-4">

                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8F1D1D]" />

                  <p className="text-base leading-7 text-gray-700">
                    {item}
                  </p>

                </div>

              </div>

            ))}

          </div>


        </div>

      </section>




      {/* CITATION SEO */}

      <section className="bg-[#fcfcfb]">

        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-32">

          <div className="max-w-4xl text-center">

            <blockquote className="text-3xl font-light leading-[1.35] tracking-[-0.04em] text-[#111111] lg:text-5xl">
              Comprendre les territoires avant d’agir.
            </blockquote>


            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5f5f5f]">
              La réussite des projets territoriaux repose autant sur leur
              qualité technique que sur leur acceptabilité locale et la qualité
              du dialogue entre acteurs publics et privés.
            </p>

          </div>

        </div>

      </section>




      {/* LIEN INTERNE SEO */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">


            <div>

              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#111]">
                Une méthode adaptée à chaque territoire.
              </h2>


              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Découvrez notre approche pour comprendre les enjeux,
                connecter les acteurs et accompagner la concrétisation
                des projets.
              </p>

            </div>


            <Link
              href="/Notre-approche"
              className="inline-flex items-center gap-3 font-medium text-[#8F1D1D]"
            >
              Découvrir notre approche
              <ArrowRight size={18} />
            </Link>


          </div>

        </div>

      </section>



{/* FAQ */}

<section className="bg-[#fcfcfb]">

  <div className="mx-auto max-w-5xl px-6 py-24">

    {/* Titre */}
    <div className="mx-auto max-w-3xl text-center">

      <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">
        Questions fréquentes sur nos expertises
      </h2>

    </div>

    {/* Questions */}
    <div className="mx-auto mt-20 max-w-3xl">

      <article className="mb-16 text-center">

        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Quels types de projets accompagne GC Territoires ?
        </h3>

        <p className="mt-6 text-lg leading-9 text-[#5f5f5f]">
          GC Territoires accompagne les projets de développement
          territorial, d’implantation, d’aménagement, de stratégie
          foncière et de relations institutionnelles.
        </p>

      </article>

      <article className="mb-16 text-center">

        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Avec quels acteurs travaillez-vous ?
        </h3>

        <p className="mt-6 text-lg leading-9 text-[#5f5f5f]">
          Le cabinet accompagne les collectivités territoriales,
          les entreprises, les investisseurs, les opérateurs
          immobiliers et les aménageurs dans leurs projets stratégiques.
        </p>

      </article>

      <article className="text-center">

        <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111]">
          Pourquoi intégrer une approche territoriale ?
        </h3>

        <p className="mt-6 text-lg leading-9 text-[#5f5f5f]">
          Une approche territoriale permet de mieux comprendre les
          dynamiques locales, d’anticiper les contraintes et de créer
          les conditions favorables à la réussite des projets.
        </p>

      </article>

    </div>

  </div>

</section>



      {/* CTA */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">


          <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[#111111] lg:text-5xl">
            Un projet de territoire ?
          </h2>


          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5f5f5f]">
            Échangeons sur vos enjeux de développement territorial,
            d’aménagement ou de stratégie d’implantation.
          </p>



          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
          >

            Échanger avec le cabinet

            <ArrowRight size={18} />

          </Link>


        </div>

      </section>


    </main>
  );
}