import { ArrowRight } from "lucide-react";

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


export default function ExpertisesPage() {
  return (
    <main className="bg-[#fcfcfb]">


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

              GC Territoires accompagne les acteurs publics et privés dans
              leurs stratégies de développement, d’implantation et de
              transformation des territoires.

            </p>


          </div>

        </div>

      </section>



      {/* INTRO */}

      <section className="border-t border-[#ececec] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-4xl">

            <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

              Une expertise au croisement
              <br />
              des enjeux publics et privés.

            </h2>


            <p className="mt-8 text-lg leading-8 text-gray-600">

              Notre approche repose sur la compréhension fine des territoires,
              la maîtrise des enjeux institutionnels et la capacité à créer
              des connexions utiles entre les différents acteurs.

            </p>

          </div>

        </div>

      </section>



      {/* EXPERTISES */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

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

                    {item.details.map(detail => (

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
              aux enjeux des territoires.

            </h2>

          </div>



          <div className="mt-14 grid gap-6 lg:grid-cols-2">


            {interventions.map(item => (

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




      {/* CITATION */}

      <section>

        <div className="mx-auto max-w-5xl px-6 py-28 text-center">


          <blockquote className="text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] lg:text-5xl">

            Comprendre les territoires avant d’agir.

          </blockquote>


          <p className="mt-8 text-lg leading-8 text-gray-600">

            La réussite des projets repose autant sur leur qualité technique
            que sur leur acceptabilité locale et la qualité du dialogue entre acteurs.

          </p>


        </div>

      </section>




      {/* CTA */}

      <section className="border-t border-[#ececec]">

        <div className="mx-auto max-w-4xl px-6 py-28 text-center">


          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[#111] lg:text-5xl">

            Un projet de territoire ?

          </h2>


          <p className="mt-8 text-lg text-gray-600">

            Échangeons sur vos enjeux de développement, d’aménagement ou de stratégie territoriale.

          </p>


          <a
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#8F1D1D] px-9 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#761818] hover:shadow-lg"
          >

            Échanger avec le cabinet

            <ArrowRight size={18}/>

          </a>


        </div>

      </section>


    </main>
  );
}